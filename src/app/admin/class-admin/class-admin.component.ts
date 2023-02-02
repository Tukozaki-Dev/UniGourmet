import { StudentClass } from './../../shared-components/models/student-class.model';
import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-class-admin',
  templateUrl: './class-admin.component.html',
  styleUrls: ['./class-admin.component.css']
})
export class ClassAdminComponent implements OnInit {
  //button text - assigned to Input() [text] coming from component 'table-header'
  btnText: string = 'Adicionar Nova Turma';

  ////used in header <h1> - assigned to Input() [tableType] coming from component 'table-header'
  tableType: string = 'turma';

  //table columns to display - assigned to Input() [displayedColumns] coming from component 'table-filtering'
  columnsToDisplay: string[] = ['name', 'registerCode', 'shift', 'category', 'actions'];
 
 //variable created to later receive ingredients from the service
 studentClasses: StudentClass[] = [];

  constructor(
    private classService: ClassService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    //assign to variable professors all professors (calling class service)
    this.studentClasses = this.classService.getClasses();
  }

  //function called when btnClickEvent (coming from component 'button') is emitted
  goToCreateNew() {
    //send to 'cadastro' route
    this.sharedService.sendTo('turma/cadastro');
  }

  //function called when onClickEditEvent (coming from component 'table-filtering') is emitted
  onClickEdit(id: string) {
    //send to 'editar' route, with id parameter
    this.sharedService.sendToId('turma', id);
  }

  //function called when callbackMethodEvent (coming from component 'table-filtering') is emitted
  onDeleteClass(id: string) {
    this.studentClasses = this.classService.deleteClass(id); //além de modificar no "banco de dados", tem que retornar o valor novo editado
  }

  //function called when onClickDetailsEvent (coming from component 'table-filtering') is emitted
  onDetailsClass(id: string) {
    this.sharedService.sendToId('turma/ver', id);
  }

}
