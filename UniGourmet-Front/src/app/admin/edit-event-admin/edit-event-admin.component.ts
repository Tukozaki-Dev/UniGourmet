import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { EventService } from 'src/app/services/event.service';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { EventNote } from 'src/app/shared-components/models/event.model';

@Component({
  selector: 'app-edit-event-admin',
  templateUrl: './edit-event-admin.component.html',
  styleUrls: ['./edit-event-admin.component.css']
})

export class EditEventAdminComponent implements OnInit {

  public isMobileMenu: boolean;

  btnText = "Salvar"
  editEvent = "";
  addEvent =
    'Você está no modo cadastro de evento, preencha todos os dados abaixo corretamente.';
  faImage = faImage;
  editMode: boolean = false;
  selectedEvent: EventNote;
  eventTypes = [];
  profiles = [];
  categories = [];

  eventForm = new FormGroup({
    eventID: new FormControl(0),
    eventDate: new FormControl(new Date, Validators.required),
    eventType: new FormControl('', Validators.required),
    notes: new FormControl('', Validators.required),
    profile: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });

  constructor(
    private globalStatesService: GlobalStatesServiceService,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.isMobileMenu = this.globalStatesService.mobileMenu;
  }

  ngOnInit() {
    this.editEvent = `Edite as informações do evento abaixo.`

    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });

    //get the profiles from EventService
    this.eventTypes = this.eventService.getEventTypesOptions();

    //get the profiles from EventService
    this.profiles = this.eventService.getProfilesOptions();

    //get the categories from EventService
    this.categories = this.eventService.getCategoriesOptions();


    //Gets the event ID (Id) param to edit the Event
    let id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.editMode = true;
      //Search the event ID at EventService
      this.selectedEvent = this.eventService.getEvent(+id);
      if (this.selectedEvent) {
        //updates the form with the event previus data
        this.eventForm.setValue({
          eventID: this.selectedEvent.eventID,
          eventDate: this.selectedEvent.eventDate,
          eventType: this.selectedEvent.eventType,
          notes: this.selectedEvent.notes,
          profile: this.selectedEvent.profile,
          category: this.selectedEvent.category
        });
      }else {
        //If the event ID  don't exists will throw an error
        alert('Esse evento não existe!');
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    } if(!id) {
      this.editMode = false;
    }
  }

  //method to edit event through the EventService
   onUpdate() {
    this.eventService.updateEvent(
      this.eventForm.value.eventID,{
        eventID: this.eventForm.value.eventID,
        eventDate: this.eventForm.value.eventDate,
        eventType: this.eventForm.value.eventType,
        notes: this.eventForm.value.notes,
        profile: this.eventForm.value.profile,
        category: this.eventForm.value.category
      }
    );
  }

  //method to add a new event through the EventService
   onAddStudent() {
    this.eventService.addEvent(this.eventForm.getRawValue());
  }

  //check if you are in edit or add mode and send updates
  onSubmit() {
    if (this.editMode) {
      this.onUpdate();
    } else {
      this.onAddStudent();
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['/eventos']);
  }

}
