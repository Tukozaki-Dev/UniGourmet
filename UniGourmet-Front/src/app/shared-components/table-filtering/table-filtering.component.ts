import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/services/ingredient.service';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogInterface } from '../dialog/dialog.interface';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-table-filtering',
  templateUrl: './table-filtering.component.html',
  styleUrls: ['./table-filtering.component.css']
})
export class TableFilteringComponent implements OnInit {

  editBtnColor: string = 'primary';
  editBtnIcon: string = 'edit'; 
  deleteBtnColor: string = 'warn';
  deleteBtnIcon: string = 'delete'; 

  @Input() displayedColumns: string[] = [];
  
  dataSource: MatTableDataSource<any>;

  @Output() onClickEditEvent: EventEmitter<string> = new EventEmitter();

  @Output() onClickDeleteEvent: EventEmitter<string> = new EventEmitter();

  @Output() callbackMethodEvent: EventEmitter<string> = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private ingredientService: IngredientService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
     // get ingredients from the service
     const ingredients = this.ingredientService.getIngredients();
    
     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(ingredients);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

  onClickEdit(id: string) {
    this.onClickEditEvent.emit(id);
  }

  onClickDelete(id: string) {
    this.onClickDeleteEvent.emit(id);
  }

  //dialog (modal) start
  openDialog(id: string) {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Deletar',
      dialogContent: 'Tem certeza que deseja deletar?',
      cancelButtonLabel: 'Cancelar',
      confirmButtonLabel: 'Sim',
      callbackMethod: () => {
        this.sendSubmit(id);
        // this.ingredientService.deleteIngredient(id);
        console.log('chamando callback do dialog, sendSubmit no component tableFiltering', id);
      },
    };
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }
  //dialog (modal) end
  
  sendSubmit(id: string) {
    this.callbackMethodEvent.emit(id);
    console.log('emissao do evento callbackMethodEvent')
  }

  

}
