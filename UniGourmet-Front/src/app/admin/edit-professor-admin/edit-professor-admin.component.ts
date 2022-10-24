import { COMMA, E, ENTER } from '@angular/cdk/keycodes';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Professor } from 'src/app/shared-components/models/professor.model';
import { ProfessorService } from 'src/app/services/professor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-professor-admin',
  templateUrl: './edit-professor-admin.component.html',
  styleUrls: ['./edit-professor-admin.component.css'],
})
export class EditProfessorAdminComponent implements OnInit, OnDestroy {
  public isMobileMenu: boolean;

  editProfessor = 'Edite as informações do professor abaixo.';
  addProfessor =
    'Você está no modo cadastro de professor, preencha todos os dados abaixo corretamente.';
  faImage = faImage;

  editMode: boolean = false;

  selectedProfessor: Professor;
  professorRegister = '';
  professorName = '';
  imagePath = '';
  subjects: string[] = [];
  specialties: string[] = [];

  separatorKeysCodes: number[] = [ENTER, COMMA];

  professorForm: FormGroup;

  subjectCtrl = new FormControl('');

  specialtyCtrl = new FormControl('');

  filteredSubjects: Observable<string[]>;

  filteredSpecialties: Observable<string[]>;

  allSubjects: string[] = [
    'Cozinha Italiana',
    'Cozinha Francesa',
    'Confeitaria',
    'Panificação',
  ];

  allSpecialties: string[] = ['Carne', 'Confeitaria', 'Massa', 'Peixe'];

  @ViewChild('subjectInput', { static: false })
  subjectInput: ElementRef<HTMLInputElement>;

  @ViewChild('specialtyInput', { static: false })
  specialtyInput: ElementRef<HTMLInputElement>;

  constructor(
    private globalStatesService: GlobalStatesServiceService,
    private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isMobileMenu = this.globalStatesService.mobileMenu;

    this.filteredSubjects = this.subjectCtrl.valueChanges.pipe(
      startWith(null),
      map((subject: string | null) =>
        subject ? this._filterSubject(subject) : this.allSubjects.slice()
      )
    );

    this.filteredSpecialties = this.specialtyCtrl.valueChanges.pipe(
      startWith(null),
      map((specialty: string | null) =>
        specialty
          ? this._filterSpecialty(specialty)
          : this.allSpecialties.slice()
      )
    );
  }

  ngOnInit() {
    this.initForm();
    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });

    //Geting the RA param to edit the professor
    this.professorRegister = this.route.snapshot.paramMap.get('ra');
    if (!!this.professorRegister) {
      this.editMode = true;
      //Search the Professor at ProfessorService
      this.selectedProfessor = this.professorService.getProfessor(
        this.professorRegister
      );

      if (!!this.selectedProfessor) {
        this.imagePath = this.selectedProfessor.imagePath;
        this.subjects = this.selectedProfessor.subjects.map((s) => {
          return s.name;
        });
        this.specialties = this.selectedProfessor.specialities.map((s) => {
          return s.specialtyName;
        });

        this.professorName = this.selectedProfessor.name;
      } else {
        //não existe professor com esse RA
        alert('Esse professor não existe!');
      }
    } else {
      this.editMode = false;
    }
  }

  private initForm() {
    let professorRegister = '';
    let professorName = '';
    let imagePath = '';
    let subjects: string[];
    let specialties: string[];

    this.professorForm = new FormGroup({
      imagePath: new FormControl(imagePath),
      professorName: new FormControl(professorName, Validators.required),
      professorRegister: new FormControl(
        professorRegister,
        Validators.required
      ),
      subjects: new FormControl(subjects),
      specialties: new FormControl(specialties),
    });
    console.log(this.professorForm);
  }
  //método para editar professor -> ver se algum campo teve alteração, se tiver alterar
  onUpdate() {}

  //método para adicioinar professor
  //ler os dados inseridos e enviar para o service de professor
  onAddProfessor() {}

  //check if you are in edit or add mode and send updates
  onSubmit() {
    if (this.editMode) {
      this.professorService.updateProfessor(
        this.professorRegister,
        this.professorForm.value
      );
    } else {
      this.professorService.addProfessor(this.professorForm.value);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  addSubject(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.subjects.push(value);
    }
    event.chipInput!.clear();
    this.subjectCtrl.setValue(null);
  }

  removeSubject(subject: string): void {
    const index = this.subjects.indexOf(subject);

    if (index >= 0) {
      this.subjects.splice(index, 1);
    }
  }

  selectedSubject(event: MatAutocompleteSelectedEvent): void {
    this.subjects.push(event.option.viewValue);
    this.subjectInput.nativeElement.value = '';
    this.subjectCtrl.setValue(null);
  }

  addSpecialty(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.specialties.push(value);
    }
    event.chipInput!.clear();
    this.specialtyCtrl.setValue(null);
  }

  removeSpecialty(specialty: string): void {
    const index = this.specialties.indexOf(specialty);

    if (index >= 0) {
      this.specialties.splice(index, 1);
    }
  }

  selectedSpecialty(event: MatAutocompleteSelectedEvent): void {
    this.specialties.push(event.option.viewValue);
    this.specialtyInput.nativeElement.value = '';
    this.specialtyCtrl.setValue(null);
  }

  private _filterSubject(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSubjects.filter((subject) =>
      subject.toLowerCase().includes(filterValue)
    );
  }

  private _filterSpecialty(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSpecialties.filter((specialty) =>
      specialty.toLowerCase().includes(filterValue)
    );
  }

  ngOnDestroy() {}
}
