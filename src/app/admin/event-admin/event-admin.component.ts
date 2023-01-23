import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { SharedService } from 'src/app/services/shared.service';
import { EventNote } from 'src/app/shared-components/models/event.model';

export interface EventNoteOutput {
  registerCode: string;
  eventDate: string;
  eventType: string;
  note: string;
  profile: string;
  category: string;
}

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.css']
})
export class EventAdminComponent implements OnInit {
//button text - assigned to Input() [text] coming from component 'table-header'
btnText: string = 'Adicionar Novo Evento';

////used in header <h1> - assigned to Input() [tableType] coming from component 'table-header'
tableType: string = 'evento';

//table columns to display - assigned to Input() [displayedColumns] coming from component 'table-filtering'
columnsToDisplay: string[] = ['eventDateString', 'eventType', 'actions'];

//variable created to later receive events from the service
eventNotes: EventNote[] = [];

constructor(
  private sharedService: SharedService,
  private eventService: EventService,
) {
}

ngOnInit(): void {

//assign to variable eventNotes all events (calling event service)
 this.eventNotes = this.eventService.getEvents();
}

//function called when btnClickEvent (coming from component 'button') is emitted
goToCreateNew() {
  //send to 'cadastro' route
  this.sharedService.sendTo('evento/cadastro');
}

//function called when onClickEditEvent (coming from component 'table-filtering') is emitted
onClickEdit(id: string) {
  //send to 'evento' route, with id parameter
  this.sharedService.sendToId('evento', id);
}

//function called when callbackMethodEvent (coming from component 'table-filtering') is emitted
onDeleteEvent(id: string) {
  this.eventNotes = this.eventService.deleteEvent(id);
}

onDetailsEvent(id: string) {
  //send to 'evento' route, with id parameter
  this.sharedService.sendToId('evento', id);
}

}
