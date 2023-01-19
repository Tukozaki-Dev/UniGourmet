import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { ClassService } from 'src/app/services/class.service';
import { DisciplineService } from 'src/app/services/discipline.service';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { DialogComponent } from 'src/app/shared-components/dialog/dialog.component';
import { DialogInterface } from 'src/app/shared-components/dialog/dialog.interface';
import { Discipline } from 'src/app/shared-components/models/discipline.model';
import { StudentClass } from 'src/app/shared-components/models/student-class.model';

@Component({
  selector: 'app-edit-class-admin',
  templateUrl: './edit-class-admin.component.html',
  styleUrls: ['./edit-class-admin.component.css']
})
export class EditClassAdminComponent implements OnInit {

  public isMobileMenu: boolean;

  addBtnColor: string = 'primary';
  addBtnIcon: string = 'add';
  deleteBtnColor: string = 'warn';
  deleteBtnIcon: string = 'delete';
  btnText = "Salvar";
  editClass ="";
  addClass = "";
  addDisciplineIcon = '+';
  faImage = faImage;
  editMode = false;
  selectedClass: StudentClass;

  allDisciplines: Discipline[] = [];
  semesters = [];
  shifts = [];
  classesCategories = [];

  classForm = this.fb.group({
    name: ['', Validators.required],
    registerCode: ['', Validators.required],
    semester: [+'', Validators.required],
    shift: ['', Validators.required],
    category: ['', Validators.required],
    disciplines: this.fb.array(this.allDisciplines, Validators.required),
  });

constructor(
  public dialog: MatDialog,
  private globalStatesService: GlobalStatesServiceService,
  private classService: ClassService,
  private disciplineService: DisciplineService,
  private route: ActivatedRoute,
  private router: Router,
  private fb:FormBuilder,
) {
  this.isMobileMenu = this.globalStatesService.mobileMenu;
}

ngOnInit() {
  this.addClass ='Você está no modo cadastro de turma, preencha todos os dados abaixo corretamente.';
  this.editClass = `Edite as informações da turma ${this.classForm.value.name} abaixo.`;

  this.globalStatesService.mobileMenuChanges.subscribe((val) => {
    this.isMobileMenu = val;
  });

  //get the semesters from StudentService
  this.semesters = this.classService.getSemesters();

  //get all shifts from ClassService
  this.shifts = this.classService.getShifts();

  //get all classes categories from ClassService
  this.classesCategories = this.classService.getClassesCategories();

  //get all disciplines Object from DisciplineService
  this.allDisciplines = this.disciplineService.getDisciplines();


  //Gets the Class Code param to edit the Student Class
  let id = this.route.snapshot.paramMap.get('id');

  if(id){
    this.editMode = true;
    //Search the Class Code at ClassService
    this.selectedClass = this.classService.getClass(id);
    this.selectedClass.disciplines.forEach(()=>{
      this.onAddDiscipline();
    });
    if (this.selectedClass) {
      //updates the form with the class previus data
      this.classForm.setValue({
        name: this.selectedClass.name,
        registerCode: this.selectedClass.registerCode,
        semester: this.selectedClass.semester,
        shift: this.selectedClass.shift,
        category: this.selectedClass.category,
        disciplines: this.selectedClass.disciplines,
      });
    } else {
      //The register code don't exists will throw an error
      alert('Essa turma não existe!');
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  } if(!id) {
    this.editMode = false;
  }
}

get disciplines() {
  return this.classForm.controls["disciplines"] as FormArray;
}

onAddDiscipline(){
  //creates a new select box each time that add button is called
  const disciplinesNames = new FormControl();

  //add the new select box to the formgroup
  this.disciplines.push(disciplinesNames);
}

onDeleteDiscipline(disciplineIndex: number) {
  this.disciplines.removeAt(disciplineIndex);
}

//method to edit class through the ClassService
  onUpdate() {
  this.classService.updateClass(
    this.classForm.value.registerCode,{
      name: this.classForm.value.name,
      registerCode: this.classForm.value.registerCode,
      semester: this.classForm.value.semester,
      shift: this.classForm.value.shift,
      category: this.classForm.value.category,
      disciplines: this.classForm.value.disciplines
    }
  );
}

//method to add a new class through the ClassService
  onAddClass() {
  this.classService.addClass(this.classForm.getRawValue());
}

//check if you are in edit or add mode and send updates
onSubmit() {
  if (this.editMode) {
    this.saveEditDialog();
  } else {
    this.onAddClass();
    this.onCancel();
  }
}

onCancel() {
  this.router.navigate(['/turmas']);
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

compareByRegisterCode(f1: Discipline, f2: Discipline): boolean {
    return f1 && f2 && f1.registerCode === f2.registerCode;
}

}
