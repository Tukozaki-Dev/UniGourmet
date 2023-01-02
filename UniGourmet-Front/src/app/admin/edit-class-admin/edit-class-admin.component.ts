import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { ClassService } from 'src/app/services/class.service';
import { DisciplineService } from 'src/app/services/discipline.service';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { StudentClass } from 'src/app/shared-components/models/student-class.model';

@Component({
  selector: 'app-edit-class-admin',
  templateUrl: './edit-class-admin.component.html',
  styleUrls: ['./edit-class-admin.component.css']
})
export class EditClassAdminComponent implements OnInit {

  public isMobileMenu: boolean;

  btnText = "Salvar"
  editClass = "";
  addClass =
    'Você está no modo cadastro de aluno, preencha todos os dados abaixo corretamente.';
  faImage = faImage;
  editMode: boolean = false;
  selectedClass: StudentClass;

  semesters = [];
  shifts = [];
  classesCategories = [];
  disciplines = [];

  classForm = new FormGroup({
    className: new FormControl('', Validators.required),
    classCode: new FormControl(0, Validators.required),
    semester: new FormControl(0, Validators.required),
    shift: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    discipline: new FormControl('', Validators.required),
  });

  constructor(
    private globalStatesService: GlobalStatesServiceService,
    private classService: ClassService,
    private disciplineService: DisciplineService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.isMobileMenu = this.globalStatesService.mobileMenu;
  }

  ngOnInit() {
    this.editClass = `Edite as informações da turma ${this.classForm.value.className} abaixo.`

    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });

    //get the semesters from StudentService
    this.semesters = this.classService.getSemesters();

    //get all classes categories from ClassService
    this.classesCategories = this.classService.getClassesCategories();

    //get all shifts from ClassService
    this.shifts = this.classService.getShifts();

    //Gets the Class Code param to edit the professor
    let id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.editMode = true;
      //Search the student Register at StudentService
      this.selectedClass = this.classService.getClass(+id);
      if (this.selectedClass) {
        //updates the form with the student previus data
        this.classForm.setValue({
          className: this.selectedClass.class_name,
          classCode: +id,
          semester: this.selectedClass.semester,
          shift: this.selectedClass.shift,
          category: this.selectedClass.category,
          discipline: this.selectedClass.discipline,
        });
      }else {
        //The register code don't exists will throw an error
        alert('Essa turma não existe!');
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    } else {
      this.editMode = false;
    }
  }
/*
  //method to edit student through the StudentService
   onUpdate() {
    this.studentService.updateStudent(
      this.studentForm.value.registerCode,{
        registerCode: this.studentForm.value.registerCode,
        name: this.studentForm.value.name,
        imagePath: this.studentForm.value.imagePath,
        semester: this.studentForm.value.semester,
        studentClass: this.studentForm.value.studentClass
      }
    );
  }

  //method to add a new student through the StudentService
   onAddStudent() {
    this.studentService.addStudent(this.studentForm.getRawValue());
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
    this.router.navigate(['../'], { relativeTo: this.route });
  } */

}
