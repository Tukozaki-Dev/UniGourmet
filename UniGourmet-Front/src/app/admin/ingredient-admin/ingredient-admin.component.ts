import { IngredientService } from './../../services/ingredient.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared-components/models/ingredient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredient-admin',
  templateUrl: './ingredient-admin.component.html',
  styleUrls: ['./ingredient-admin.component.css']
})
export class IngredientAdminComponent implements OnInit {
  //button text - assigned to Input() [text] coming from component 'table-header'
  btnText: string = 'Adicionar Novo Ingrediente';

  ////used in header <h1> - assigned to Input() [tableType] coming from component 'table-header'
  tableType: string = 'ingrediente';

  //table columns to display - assigned to Input() [displayedColumns] coming from component 'table-filtering'
  displayedColumns: string[] = ['id', 'name', 'unity', 'actions'];
  
  //variable created to later receive ingredients from the service
  ingredients: Ingredient[] = [];
  
  constructor(
    private router: Router,
    private ingredientService: IngredientService,
  ) {}
  
  ngOnInit() {
    //assign to variable ingredients all ingredients (calling ingredient service)
    this.ingredients = this.ingredientService.getIngredients();
  }

  //function called when btnClickEvent (coming from component 'button') is emitted
  goToCreateNew() {
    //send to 'cadastro' route
    // this.router.navigate(['/ingrediente/cadastro']);
    console.log('enviar para a pagina de cadastro');
  }

  //function called when onClickEditEvent (coming from component 'table-filtering') is emitted
  onClickEdit(id: string) {
    //send to 'editar' route, with id parameter
    this.router.navigate(['/ingrediente', id]);
  }

  //function called when callbackMethodEvent (coming from component 'table-filtering') is emitted
  onDeleteIngredient(id: string) {
    this.ingredients = this.ingredientService.deleteIngredient(id); //além de modificar no "banco de dados", tem que retornar o valor novo editado
  }
}
