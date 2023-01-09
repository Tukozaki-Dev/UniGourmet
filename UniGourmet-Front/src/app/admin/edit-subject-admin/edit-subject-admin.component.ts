import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { DisciplineService } from 'src/app/services/discipline.service';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { DisciplineWithClasses } from 'src/app/shared-components/models/DisciplineWithClasses.model';



@Component({
  selector: 'app-edit-subject-admin',
  templateUrl: './edit-subject-admin.component.html',
  styleUrls: ['./edit-subject-admin.component.css']
})
export class EditSubjectAdminComponent implements OnInit {

  public isMobileMenu: boolean;

  addBtnColor: string = 'primary';
  addBtnIcon: string = 'add';
  deleteBtnColor: string = 'warn';
  deleteBtnIcon: string = 'delete';
  btnText = "Salvar";
  editSubject ="";
  addSubject = "";
  addDisciplineIcon = '+';
  faImage = faImage;
  editMode = false;
  selectedSubject: DisciplineWithClasses;

  allLessons = [{
    recipeName: "",
    recipeId: "",
  }];

  semesters = [];
  numberOfClasses = [];

  subjectForm = this.fb.group({
    subject: {
      name: ['', Validators.required],
      registerCode: ['', Validators.required],
      semester: ['', Validators.required],
      numberOfClasses: ['', Validators.required],
    },
    lessons: this.fb.array(this.allLessons, Validators.required),
  });

  constructor(
    private globalStatesService: GlobalStatesServiceService,
    private disciplineService: DisciplineService,
    private route: ActivatedRoute,
    private router: Router,
    private fb:FormBuilder,
  ) {
    this.isMobileMenu = this.globalStatesService.mobileMenu;
  }

  ngOnInit() {
    this.addSubject ='Você está no modo cadastro de matéria, preencha todos os dados abaixo corretamente.';
    this.editSubject = `Edite as informações da matéria ${this.subjectForm.value.subject.name} abaixo.`;

    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });

    //get the semesters from DisciplineService
    this.semesters = this.disciplineService.getSemesters();

    //get all number of classes from DisciplineService
    this.numberOfClasses = this.disciplineService.getNumberOfClasses();

    //get all lessons Object from DisciplineService

    this.allLessons = this.allLessons.map((lessons => {
      let lesson = {
        recipeName: lessons.recipeName,
        recipeId: lessons.recipeId
      }
      return lesson
    }))

    //Gets the Subject Id param to edit the Subject
    let id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.editMode = true;
      //Search the Subject Id at SubjectService
      this.selectedSubject.subject = this.disciplineService.getDiscipline(id);
      this.selectedSubject.lessons.forEach(()=>{
        this.onAddLesson();
      });
      if (this.selectedSubject) {
        //updates the form with the subject previus data
        /* this.subjectForm.setValue({
          subject: {
            name: this.selectedSubject.subject.name,
            registerCode: this.selectedSubject.subject.registerCode,
            semester: this.selectedSubject.subject.semester,
            numberOfClasses: this.selectedSubject.subject.numberOfClasses,
          },
          lessons: this.selectedSubject.lessons,
        }); */
      } else {
        //The register code don't exists will throw an error
        alert('Essa matéria não existe!');
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    } if(!id) {
      this.editMode = false;
    }
  }

  get lessons() {
    return this.subjectForm.controls["lessons"] as FormArray;
  }

  onAddLesson(){
    //creates a new select box each time that add button is called
    const lessonName = new FormControl();

    //add the new select box to the formgroup
    this.lessons.push(lessonName);
  }

  onDeleteDiscipline(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  //method to edit class through the ClassService
   onUpdate() {
    /* this.disciplineService.updateDiscipline(
      this.subjectForm.value.subject.registerCode,{
        name: this.subjectForm.value.subject.name,
        registerCode: this.subjectForm.value.subject.registerCode,
        semester: this.subjectForm.value.subject.semester,
        numberOfClasses: this.subjectForm.value.subject.numberOfClasses,
        lessons: this.subjectForm.value.lessons
      }
    ); */
  }

  //method to add a new class through the ClassService
   onAddDiscipline() {
  //  this.disciplineService.addDiscipline(this.subjectForm.getRawValue());
  }

  //check if you are in edit or add mode and send updates
  onSubmit() {
    if (this.editMode) {
      this.onUpdate();
    } else {
      this.onAddDiscipline();
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['/materias']);
  }

  compareByRegisterCode(f1: DisciplineWithClasses, f2: DisciplineWithClasses): boolean {
    return f1 && f2 && f1.lessons[0] === f2.lessons[0];
}

}
