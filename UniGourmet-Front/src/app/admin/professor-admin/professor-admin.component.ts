import { Professor } from './../../shared-components/models/professor.model';
import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-professor-admin',
  templateUrl: './professor-admin.component.html',
  styleUrls: ['./professor-admin.component.css'],

})
export class ProfessorAdminComponent implements OnInit {
   //button text - assigned to Input() [text] coming from component 'table-header'
   btnText: string = 'Adicionar Novo Professor';

   ////used in header <h1> - assigned to Input() [tableType] coming from component 'table-header'
   tableType: string = 'professor(a)';

   //table columns to display - assigned to Input() [displayedColumns] coming from component 'table-filtering'
   columnsToDisplay: string[] = ['name', 'registerCode', 'actions'];

   expandedContentTitle: string[] = [];
  
  //variable created to later receive ingredients from the service
  professors: Professor[] = [];

  constructor(
    private router: Router,
    private professorService: ProfessorService,
  ) {}

  ngOnInit() {
    //assign to variable professors all professors (calling professor service)
    this.professors = this.professorService.getProfessors();
  }

  //function called when btnClickEvent (coming from component 'button') is emitted
  goToCreateNew() {
    //send to 'cadastro' route
    this.router.navigate(['professor/cadastro']);
  }

  //function called when onClickEditEvent (coming from component 'table-filtering') is emitted
  onClickEdit(id: string) {
    //send to 'editar' route, with id parameter
    this.router.navigate(['professor', id]);
  }

  //function called when callbackMethodEvent (coming from component 'table-filtering') is emitted
  onDeleteProfessor(id: string) {
    this.professors = this.professorService.deleteProfessor(id); //além de modificar no "banco de dados", tem que retornar o valor novo editado
  }

}