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
  ingredients:Ingredient[] = []; //agora os ingredientes são consultados pelo pai, e o pai passa esses dados pra tabela 
  constructor(
    private router: Router,
    private tableFiltering: TableFilteringComponent,
    private ingredientService: IngredientService,
  ) {}
  
  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
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

 /* onClickDelete(id: string) {
    console.log('abrindo modal');
    this.tableFiltering.openDialog(id);
  }não precisa disso, pois o pai não tem que saber qual q interação entre a tabela e o dialog. O pai nem deve saber que o dialog existe, ele só se importa com a confirmação de delete  */

  onDeleteIngredient(id: string) {
    console.log('output do callback deu certo');
    this.ingredients = this.ingredientService.deleteIngredient(id); //além de modificar no "banco de dados", tem que retornar o valor novo editado
    
  }
}
