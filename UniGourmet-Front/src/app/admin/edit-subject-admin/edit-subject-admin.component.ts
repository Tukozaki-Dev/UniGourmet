import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { DisciplineService } from 'src/app/services/discipline.service';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { DisciplineWithClasses } from 'src/app/shared-components/models/disciplineWithClasses.model';

export interface lesson {
  recipeName: string,
  recipeId: string,
}

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
  addRecipeText = "Adicionar Receita";
  editSubject ="";
  addSubject = "";
  addDisciplineIcon = '+';
  faImage = faImage;
  editMode = false;
  selectedSubject: DisciplineWithClasses;

  allLessons:lesson[] = [];

  semesters = [];
  numberOfClasses = [];

  subjectForm = this.fb.group({
    subject: this.fb.group({
      name: ['', Validators.required],
      registerCode: ['', Validators.required],
      semester: [0, Validators.required],
      numberOfClasses: [0, Validators.required],
    }),
    lessons: this.fb.array([this.allLessons], Validators.required),
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

   /*  this.allLessons = this.disciplineService.getDisciplinesWithClasses().map((disciplinesWithClasses => {

      return disciplinesWithClasses.lessons.push()
    }))  */

    console.log(this.allLessons)

    //Gets the Subject Id param to edit the Subject
    let ra = this.route.snapshot.paramMap.get('id');

    if(ra){
      this.editMode = true;
      //Search the Subject Id at SubjectService
      this.selectedSubject = this.disciplineService.getDisciplineWithClasses(ra);
      this.selectedSubject.lessons.forEach(()=>{
        this.onAddLesson();
      });
      if(this.selectedSubject.subject.registerCode) {
        //updates the form with the subject previus data
         this.subjectForm.setValue({
          subject: {
            name: this.selectedSubject.subject.name,
            registerCode: this.selectedSubject.subject.registerCode,
            semester: this.selectedSubject.subject.semester,
            numberOfClasses: this.selectedSubject.subject.numberOfClasses,
          },
          lessons: this.selectedSubject.lessons,
        });
      } else {
        //If the Subject Id don't exists will throw an error
        alert('Essa matéria não existe!');
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    } if(!ra) {
      this.editMode = false;
    }
  }

  get lessons() {
    return this.subjectForm.controls["lessons"] as FormArray;
  }

  onAddLesson(){
    //creates a new select box each time that add button is called
    const lessonForm = this.fb.group({
      lessonName:'',
      lessonId: '',
    });

    //add the new select box to the formgroup
    this.lessons.push(lessonForm);
  }

  onDeleteDiscipline(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  //method to edit class through the ClassService
   onUpdate() {
      this.disciplineService.updateDisciplineWithClasses(
      this.subjectForm.value.subject.registerCode,{
        subject:{
        name: this.subjectForm.value.subject.name,
        registerCode: this.subjectForm.value.subject.registerCode,
        semester: this.subjectForm.value.subject.semester,
        numberOfClasses: this.subjectForm.value.subject.numberOfClasses},
        lessons: this.subjectForm.value.lessons
      }
    );
  }

  onAddRecipe(){

  }

  //method to add a new class through the ClassService
   onAddDiscipline() {
    this.disciplineService.addDisciplineWithClasses(this.subjectForm.getRawValue());
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


}
