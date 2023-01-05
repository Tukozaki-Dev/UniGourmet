import { Component, Input, OnInit, Output, ViewChild, EventEmitter, SimpleChanges } from '@angular/core';
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
  @Input() data: any[] = []; //agora vc recebe os dados do pai. Podendo ser ingrediente, ou qlquer outro tipo de item vindo das outras telas 
  
  dataSource: MatTableDataSource<any>;

  @Output() onClickEditEvent: EventEmitter<string> = new EventEmitter();

 // @Output() onClickDeleteEvent: EventEmitter<string> = new EventEmitter(); Não precisa disso

  @Output() callbackMethodEvent = new EventEmitter<string>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    //private ingredientService: IngredientService, a tabela não é responsável pelos dados ou pela lógica, para assim ser reutilizavel
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
     // get ingredients from the service
     //const ingredients = this.ingredientService.getIngredients(); essa parte é o parent que fica responsável
    
     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(this.data);
  }

  /* tem q ter o ngOnChange pra detectar que os itens foram modificados no service  */ 
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.data);
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
    this.openDialog(id);
  }

  //dialog (modal) start
  openDialog(id: string) {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Deletar',
      dialogContent: 'Tem certeza que deseja deletar?',
      cancelButtonLabel: 'Cancelar',
      confirmButtonLabel: 'Sim',
      callbackMethod: () => {
        console.log('1chamando callback do dialog, sendSubmit no component tableFiltering', id);
        this.sendSubmit(id);
        // this.ingredientService.deleteIngredient(id);
        
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
    console.log('2emissao do evento callbackMethodEvent id:', id)
  }

  

}
