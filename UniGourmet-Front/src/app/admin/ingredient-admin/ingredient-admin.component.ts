import { TableFilteringComponent } from './../../shared-components/table-filtering/table-filtering.component';
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
export class IngredientAdminComponent implements OnInit {
  btnText: string = 'Adicionar Novo Ingrediente';

  //table columns to display 
  displayedColumns: string[] = ['id', 'name', 'unity', 'actions'];

  constructor(
    private router: Router,
    private tableFiltering: TableFilteringComponent,
    private ingredientService: IngredientService,
  ) {}
  
  ngOnInit() {

  }

  goToCreateNew() {
    //enviar para a pagina de cadastro
    console.log('enviar para a pagina de cadastro');
    // this.router.navigate(['/ingrediente/cadastro']);
  }

  onClickEdit(id) {
    this.router.navigate([
        '/ingrediente',
        id
      ]);
  }

  onClickDelete(id: string) {
    console.log('abrindo modal');
    this.tableFiltering.openDialog(id);
  }

  onDeleteIngredient(id: string) {
    this.ingredientService.deleteIngredient(id);
    console.log('output do callback deu certo');
  }

}
