import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { DisciplineService } from 'src/app/services/discipline.service';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { DialogWithChipComponent } from 'src/app/shared-components/dialog-with-chip/dialog-with-chip.component';
import { DialogWithChipInterface } from 'src/app/shared-components/dialog-with-chip/dialog-with-chip.interface';
import { DialogComponent } from 'src/app/shared-components/dialog/dialog.component';
import { DialogInterface } from 'src/app/shared-components/dialog/dialog.interface';
import { DisciplineWithClasses, Lesson, RecipeLesson } from 'src/app/shared-components/models/disciplineWithClasses.model';
import { Recipe } from 'src/app/shared-components/models/recipe.model';


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
  allLessons:Lesson[] = [];
  recipes: Recipe[] = [];
  semesters = [];
  numberOfClasses = [16];
  ra;
  arraryNumberOfClasses = [];
  subjectForm = this.fb.group({
    subject: this.fb.group({
      name: ['', Validators.required],
      registerCode: ['', Validators.required],
      semester: [0, Validators.required],
      numberOfClasses: [0, Validators.required],
    }),
    lessons: this.fb.array(this.allLessons, Validators.required),
  });

  constructor(
    public dialog: MatDialog,
    private globalStatesService: GlobalStatesServiceService,
    private disciplineService: DisciplineService,
    private recipeService: RecipeService,
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

    //get all number of classes from DisciplineService
    this.numberOfClasses = this.disciplineService.getNumberOfClasses();

    let positionAtArray = this.subjectForm.value.subject.numberOfClasses;

    //create an array accordingly with the number Of classes selected
    this.arraryNumberOfClasses = Array(this.numberOfClasses[positionAtArray]).fill(0).map((x,i)=>i);

    //assign to variable ingredients all ingredients (calling ingredient service)
    this.recipes = this.recipeService.getRecipes();

    //get the semesters from DisciplineService
    this.semesters = this.disciplineService.getSemesters();

    //gets the Subject Id param to edit the Subject
     this.ra = this.route.snapshot.paramMap.get('id');

    //get all lessons Object from DisciplineService
    const disciplineWithClasses = this.disciplineService.getDisciplineWithClasses(this.ra);
    this.allLessons = disciplineWithClasses.lessons;

    if(this.ra){
      this.editMode = true;
      //Search the Subject Id at SubjectService
      this.selectedSubject = this.disciplineService.getDisciplineWithClasses(this.ra);

      this.arraryNumberOfClasses.forEach(() => {
        this.onAddLesson();
      });
      if(this.selectedSubject.subject.registerCode) {
        //updates the form with the subject previus data
         let lessons:Lesson[] = [...this.selectedSubject.lessons];
        const lessonsLength = this.selectedSubject.lessons.length;
         if(this.selectedSubject.subject.numberOfClasses > lessonsLength){
          const emptyLesson:Lesson = {recipeLessons:[]};
          for(let i =lessonsLength -1;  i <this.selectedSubject.subject.numberOfClasses; i++ ){
            lessons.push(emptyLesson);
          }
         }

         this.subjectForm.setValue({
          subject: {
            name: this.selectedSubject.subject.name,
            registerCode: this.selectedSubject.subject.registerCode,
            semester: this.selectedSubject.subject.semester,
            numberOfClasses: this.selectedSubject.subject.numberOfClasses,
          },
          lessons: lessons,
        });

      } else {
        //If the Subject Id don't exists will throw an error
        alert('Essa matéria não existe!');
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    } if(!this.ra) {
      this.editMode = false;
    }

  }

  updateNumberOfClasses(selectedValue:number){
    let arrayPosition = this.numberOfClasses.indexOf(selectedValue);
    this.arraryNumberOfClasses = Array(this.numberOfClasses[arrayPosition]).fill(0).map((x,i)=>i);
  }

  get lessons() {
    return this.subjectForm.controls["lessons"] as FormArray;
  }

  onAddLesson(){
    //creates a new select box each time the method is called
    const lessonName = new FormControl();

    //add the new option to the formgroup
    this.lessons.push(lessonName);
  }

  //method to edit class through the ClassService
  onUpdate() {
    this.disciplineService.updateDisciplineWithClasses(
      this.subjectForm.value.subject.registerCode,
      {
        subject:{
        name: this.subjectForm.value.subject.name,
        registerCode: this.subjectForm.value.subject.registerCode,
        semester: this.subjectForm.value.subject.semester,
        numberOfClasses: this.subjectForm.value.subject.numberOfClasses},
        lessons: this.subjectForm.value.lessons
      }
    );
  }

  onAddRecipe(recipes:RecipeLesson[], id:number) {
     const dialogInterface: DialogWithChipInterface = {
      dialogChipsContent: recipes.map((recipe) => {
        return {
          name: recipe.recipeName,
          id: recipe.recipeId
        }
      }),
      dialogChipLabel: "Receitas",
      dialogChipPlaceholder: "Adicionar Receita",
      dialogContent: `Selecione uma ou mais receitas pertencentes à aula da matéria ${this.subjectForm.value.subject.name}: `,
      allChips: this.recipes.map((recipe =>{
        return {
          name: recipe.recipeMain.name,
          id: recipe.recipeMain.id
        }
      })),
      confirmSaveLabel: 'Salvar',
        callbackMethod: (recipes: {name: string, id: string}[]) => {
        const recipesMapped = recipes.map((recipe => {
          return {
            recipeName: recipe.name,
            recipeId: recipe.id
          }
        }));

        this.allLessons[id] = {
          recipeLessons:recipesMapped
        };

        const result: RecipeLesson[] = this.allLessons[id].recipeLessons;

        this.disciplineService.updateLesson(id, result, this.ra)
          .subscribe((data)=>{
            this.patchValueLessonData(data);
          });

      },
    };
    this.dialog.open(DialogWithChipComponent, {
      width: '400px',
      data: dialogInterface,
    });
  }

  patchValueLessonData(lessons:Lesson[]){
    this.subjectForm.patchValue({
      lessons:lessons
    });
  }

  //method to add a new class through the ClassService
   onAddDiscipline() {
    this.disciplineService.addDisciplineWithClasses(this.subjectForm.getRawValue());
  }

  //check if you are in edit or add mode and send updates
  onSubmit() {
    if(this.editMode) {
      this.saveEditDialog();
    }else {
      this.onAddDiscipline();
      this.onCancel();
    }
  }

  onCancel() {
    this.router.navigate(['/materias']);
  }

  backLastPageDialog(){
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Voltar',
      dialogContent: 'Você tem certeza que deseja voltar sem que as alterações sejam salvas?',
      cancelButtonLabel: 'Cancelar',
      confirmButtonLabel: 'Sim',
      callbackMethod: () => {
        this.onCancel();
      },
    };
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }

  saveEditDialog() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Salvar edições',
      dialogContent: 'Salvar as edições feitas?',
      cancelButtonLabel: 'Cancelar',
      confirmButtonLabel: 'Sim',
      callbackMethod: () => {
        this.onUpdate();
        this.onCancel();
      },
    };
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }
}
