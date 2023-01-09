import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Professor } from 'src/app/shared-components/models/professor.model';
import { ProfessorService } from 'src/app/services/professor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialty } from 'src/app/shared-components/models/specialty.model';
import { Discipline } from 'src/app/shared-components/models/discipline.model';
import { DisciplineService } from 'src/app/services/discipline.service';
import { SpecialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-edit-professor-admin',
  templateUrl: './edit-professor-admin.component.html',
  styleUrls: ['./edit-professor-admin.component.css'],
})
export class EditProfessorAdminComponent implements OnInit {
  public isMobileMenu: boolean;

  btnText = "Salvar"
  editProfessor = "";
  addProfessor =
    'Você está no modo cadastro de professor, preencha todos os dados abaixo corretamente.';
  faImage = faImage;

  editMode: boolean = false;
  selectedProfessor: Professor;
  subjects: Discipline[] = [];
  specialties: Specialty[] = [];

  imagePath = '';

  separatorKeysCodes: number[] = [ENTER, COMMA];

  professorForm = new FormGroup({
    imagePath: new FormControl(''),
    name: new FormControl('', Validators.required),
    registerCode: new FormControl('', Validators.required),
    subjects: new FormControl([], Validators.required),
    specialties: new FormControl([], Validators.required),
  });

  subjectCtrl = new FormControl('', Validators.required);

  specialtyCtrl = new FormControl('', Validators.required);

  filteredSubjects: Observable<Discipline[]>;

  filteredSpecialties: Observable<Specialty[]>;

  allSubjects = this.disciplineService.disciplines;

  allSpecialties = this.specialtyService.specialty;

  @ViewChild('subjectInput', { static: false })
  subjectInput: ElementRef<HTMLInputElement>;

  @ViewChild('specialtyInput', { static: false })
  specialtyInput: ElementRef<HTMLInputElement>;

  constructor(
    private globalStatesService: GlobalStatesServiceService,
    private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router,
    private disciplineService: DisciplineService,
    private specialtyService: SpecialtyService
  ) {
    this.isMobileMenu = this.globalStatesService.mobileMenu;

    this.filteredSubjects = this.subjectCtrl.valueChanges.pipe(
      startWith(null),
      map((typedOnInput: string | null) => {
        return typedOnInput
          ? this._filterSubject(typedOnInput)
          : this.allSubjects.slice();
      })
    );

    this.filteredSpecialties = this.specialtyCtrl.valueChanges.pipe(
      startWith(null),
      map((typedOnInput: string | null) => {
        return typedOnInput
          ? this._filterSpecialty(typedOnInput)
          : this.allSpecialties.slice();
      })
    );
  }

  ngOnInit() {
    this.editProfessor = `Edite as informações do professor ${this.professorForm.value.name} abaixo.`
    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });
    let ra = this.professorForm.value.registerCode;

    //Gets the Professor Register (RA) param to edit the professor
    ra = this.route.snapshot.paramMap.get('ra');

    if(ra) {
      this.editMode = true;
      //Search the Professor at ProfessorService
      this.selectedProfessor = this.professorService.getProfessor(
        ra
      );
      if(this.selectedProfessor) {
        this.subjects = this.selectedProfessor.subjects;
        this.specialties = this.selectedProfessor.specialties;
        this.imagePath = this.selectedProfessor.imagePath;
        //updates the form with the professor previus data
        this.professorForm.patchValue({
          registerCode: ra,
          name: this.selectedProfessor.name,
          imagePath: this.selectedProfessor.imagePath,
          specialties: this.selectedProfessor.specialties,
          subjects: this.selectedProfessor.subjects,
        });
      }else {
        //The register code don't exists will throw an error
        alert('Esse professor não existe!');
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    }
    if(!ra) {
      this.editMode = false;
    }
  }

  //method to edit professor through the Professor Service
  onUpdate() {
    this.professorService.updateProfessor(
      this.professorForm.value.registerCode,
      this.professorForm.getRawValue()
    );
  }

  //method to add a new professor through the Professor Service
  onAddProfessor() {
    this.professorService.addProfessor(this.professorForm.getRawValue());
  }

  //check if you are in edit or add mode and send updates
  onSubmit() {
    if (this.editMode) {
      this.onUpdate();
    } else {
      this.onAddProfessor();
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['/professores']);
  }

  //method  to remove the selected subject chip from the list (array)
  removeSubject(subjectId: string): void {
    const index = this.subjects.findIndex((s) => {
      return s.registerCode == subjectId;
    });

    if (index >= 0) {
      this.subjects.splice(index, 1);
    }
    this.professorForm.patchValue({
      subjects: this.subjects,
    });
  }
  //method  to select and insert the selected chip subject from the list (array)
  selectedSubject(event: MatAutocompleteSelectedEvent): void {
    const subject = event.option.value;
    this.subjects.push(subject);
    this.professorForm.patchValue({
      subjects: this.subjects,
    });
    this.subjectInput.nativeElement.value = '';
    this.subjectCtrl.setValue(null);
  }

  //method  to remove the selected specialty chip from the list (array)
  removeSpecialty(specialtyId: string): void {
    const index = this.specialties.findIndex((s) => {
      return s.id.toString() == specialtyId;
    });

    if (index >= 0) {
      this.specialties.splice(index, 1);
    }
    this.professorForm.patchValue({
      specialties: this.specialties,
    });
  }
  //method  to select and insert the selected chip specialty from the list (array)
  selectedSpecialty(event: MatAutocompleteSelectedEvent): void {
    const specialty = event.option.value;
    this.specialties.push(specialty);
    this.specialtyInput.nativeElement.value = '';
    this.specialtyCtrl.setValue(null);
    this.professorForm.patchValue({
      specialties: this.specialties,
    });
  }

  //List all subjects and filter while the user type a letter
  private _filterSubject(value: string): Discipline[] {
    const filterValue = value.toLowerCase();
    return this.allSubjects.filter((subject) =>
      subject.name.toLowerCase().includes(filterValue)
    );
  }

  //List all specialties and filter while the user type a letter
  private _filterSpecialty(value: string): Specialty[] {
    const filterValue = value.toLowerCase();

    return this.allSpecialties.filter((specialty) =>
      specialty.name.toLowerCase().includes(filterValue)
    );
  }
}
