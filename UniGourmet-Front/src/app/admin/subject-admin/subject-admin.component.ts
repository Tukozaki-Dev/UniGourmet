import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplineService } from 'src/app/services/discipline.service';
import { Discipline } from 'src/app/shared-components/models/discipline.model';

@Component({
  selector: 'app-subject-admin',
  templateUrl: './subject-admin.component.html',
  styleUrls: ['./subject-admin.component.css']
})
export class SubjectAdminComponent implements OnInit {
  //button text - assigned to Input() [text] coming from component 'table-header'
  btnText: string = 'Adicionar Nova Matéria';

  ////used in header <h1> - assigned to Input() [tableType] coming from component 'table-header'
  tableType: string = 'matéria';

  //table columns to display - assigned to Input() [displayedColumns] coming from component 'table-filtering'
  columnsToDisplay: string[] = ['name', 'registerCode', 'actions'];
 
 //variable created to later receive ingredients from the service
 disciplines: Discipline[] = [];

  constructor(
    private router: Router,
    private disciplineService: DisciplineService,
  ) { }

  ngOnInit(): void {
    //assign to variable professors all professors (calling professor service)
    this.disciplines = this.disciplineService.getDisciplines();
  }

  //function called when btnClickEvent (coming from component 'button') is emitted
  goToCreateNew() {
    //send to 'cadastro' route
    this.router.navigate(['materia/cadastro']);
  }

  //function called when onClickEditEvent (coming from component 'table-filtering') is emitted
  onClickEdit(id: string) {
    //send to 'editar' route, with id parameter
    this.router.navigate(['materia', id]);
  }

  //function called when callbackMethodEvent (coming from component 'table-filtering') is emitted
  onDeleteProfessor(id: string) {
    this.disciplines = this.disciplineService.deleteDiscipline(id); //além de modificar no "banco de dados", tem que retornar o valor novo editado
  }

}
