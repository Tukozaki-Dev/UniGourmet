import { IngredientService } from './../../services/ingredient.service';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Ingredient } from 'src/app/shared-components/models/ingredient.model';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/shared-components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogInterface } from 'src/app/shared-components/dialog/dialog.interface';


@Component({
  selector: 'app-ingredient-admin',
  templateUrl: './ingredient-admin.component.html',
  styleUrls: ['./ingredient-admin.component.css']
})
export class IngredientAdminComponent implements AfterViewInit {
  btnText: string = 'Adicionar Novo Ingrediente';

  displayedColumns: string[] = ['id', 'name', 'unity', 'actions'];
  dataSource: MatTableDataSource<Ingredient>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private ingredientService: IngredientService,
    private router: Router,
    public dialog: MatDialog,
  ) {
  }
  
  ngOnInit() {
    
    // get ingredients from the service
    const ingredients = this.ingredientService.getIngredients();
    
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ingredients);

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

  goToCreateNew() {
    //enviar para a pagina de cadastro
    console.log('enviar para a pagina de cadastro');
  }

  onClick(event: string, id: string) {
    if(event === 'edit') {
      //enviar para rota de edição (/ingrediente) com id como parametro
      this.router.navigate([
        '/ingrediente',
        id,
      ]);
    }

    if(event === 'delete') {
      this.openDialog(id);
    }
  }

  //dialog (modal) start
  openDialog(id: string) {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Deletar',
      dialogContent: 'Tem certeza que deseja deletar?',
      cancelButtonLabel: 'Cancelar',
      confirmButtonLabel: 'Sim',
      callbackMethod: () => {
        this.onDeleteIngredient(id);
      },
    };
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }
  //dialog (modal) end
  
  onDeleteIngredient(id: string) {
    this.ingredientService.deleteIngredient(id);
  }

}
