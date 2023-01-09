import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/shared-components/models/student.model';

@Component({
  selector: 'app-student-admin',
  templateUrl: './student-admin.component.html',
  styleUrls: ['./student-admin.component.css']
})
export class StudentAdminComponent implements OnInit {
  //button text - assigned to Input() [text] coming from component 'table-header'
  btnText: string = 'Adicionar Novo Aluno';

  ////used in header <h1> - assigned to Input() [tableType] coming from component 'table-header'
  tableType: string = 'aluno(a)';

  //table columns to display - assigned to Input() [displayedColumns] coming from component 'table-filtering'
  columnsToDisplay: string[] = ['name', 'registerCode', 'actions'];
 
 //variable created to later receive ingredients from the service
 students: Student[] = [];

  constructor(
    private router: Router,
    private studentService: StudentService,
  ) { }

  ngOnInit(): void {
    //assign to variable professors all professors (calling professor service)
    this.students = this.studentService.getStudents();
  }

  //function called when btnClickEvent (coming from component 'button') is emitted
  goToCreateNew() {
    //send to 'cadastro' route
    this.router.navigate(['aluno/cadastro']);
  }

  //function called when onClickEditEvent (coming from component 'table-filtering') is emitted
  onClickEdit(id: string) {
    //send to 'editar' route, with id parameter
    this.router.navigate(['aluno', id]);
  }

  //function called when callbackMethodEvent (coming from component 'table-filtering') is emitted
  onDeleteStudent(id: string) {
    this.students = this.studentService.deleteStudent(id); //além de modificar no "banco de dados", tem que retornar o valor novo editado
  }
}
