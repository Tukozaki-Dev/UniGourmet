import { Professor } from './../../shared-components/models/professor.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ProfessorService } from 'src/app/services/professor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-professor-admin',
  templateUrl: './professor-admin.component.html',
  styleUrls: ['./professor-admin.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProfessorAdminComponent implements OnInit {
  dataSource: MatTableDataSource<Professor>;
  columnsToDisplay = ['name', 'registerCode', 'actions'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Professor | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private professorService: ProfessorService) {}

  ngOnInit() {
    const professors = this.professorService.getProfessors();
    this.dataSource = new MatTableDataSource(professors);
    // this.dataSource = this.professorService.getProfessors();
    // console.log(this.dataSource[0].subjects[0].name);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClick(event: string) {
    if(event === 'edit') {
      console.log('editando');
      
    }
    if(event === 'delete') {
      console.log('deletando');
    }
  }
}