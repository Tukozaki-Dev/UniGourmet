import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { ClassService } from 'src/app/services/class.service';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/shared-components/models/student.model';

@Component({
  selector: 'app-edit-student-admin',
  templateUrl: './edit-student-admin.component.html',
  styleUrls: ['./edit-student-admin.component.css']
})
export class EditStudentAdminComponent implements OnInit {

  public isMobileMenu: boolean;

  btnText = "Salvar"
  editStudent = "";
  addStudent =
    'Você está no modo cadastro de aluno, preencha todos os dados abaixo corretamente.';
  faImage = faImage;
  editMode: boolean = false;
  selectedStudent: Student;

  semesters = [];
  studentClasses = [];

  studentForm = new FormGroup({
    imagePath: new FormControl(''),
    name: new FormControl('', Validators.required),
    registerCode: new FormControl('', Validators.required),
    semester: new FormControl(0, Validators.required),
    studentClass: new FormControl('', Validators.required),
  });

  constructor(
    private globalStatesService: GlobalStatesServiceService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private classService: ClassService,
  ) {
    this.isMobileMenu = this.globalStatesService.mobileMenu;
  }

  ngOnInit() {
    this.editStudent = `Edite as informações do aluno ${this.studentForm.value.name} abaixo.`

    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });

    //get the semesters from StudentService
    this.semesters = this.studentService.getSemesters();

    //get all classes from ClassService
    let allClasses = this.classService.getClasses();

    //map all Studant Class object and return a array with all the classes code
    this.studentClasses = allClasses.map((classes)=>{
       return classes.class_code;
    })

    //Gets the Student Register (RA) param to edit the professor
    let ra = this.route.snapshot.paramMap.get('ra');

    if(ra){
      this.editMode = true;
      //Search the student Register at StudentService
      this.selectedStudent = this.studentService.getStudent(ra);
      if (this.selectedStudent) {
        //updates the form with the student previus data
        this.studentForm.setValue({
          registerCode: ra,
          name: this.selectedStudent.name,
          imagePath: this.selectedStudent.imagePath,
          semester: this.selectedStudent.semester,
          studentClass: this.selectedStudent.studentClass
        });
      }else {
        //The register code don't exists will throw an error
        alert('Esse aluno não existe!');
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    } else {
      this.editMode = false;
    }
  }

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
  }



}
