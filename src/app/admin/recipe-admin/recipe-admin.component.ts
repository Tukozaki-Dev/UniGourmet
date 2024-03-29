import { RecipeGroup } from './../../shared-components/models/recipe.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { SharedService } from 'src/app/services/shared.service';
import { Recipe } from 'src/app/shared-components/models/recipe.model';

@Component({
  selector: 'app-recipe-admin',
  templateUrl: './recipe-admin.component.html',
  styleUrls: ['./recipe-admin.component.css']
})
export class RecipeAdminComponent implements OnInit {
  //button text - assigned to Input() [text] coming from component 'table-header'
  btnText: string = 'Adicionar Nova Receita';

  //used in header <h1> - assigned to Input() [tableType] coming from component 'table-header'
  tableType: string = 'receita';

  //table columns to display - assigned to Input() [displayedColumns] coming from component 'table-filtering'
  displayedColumns: object = {'id':'id', 'name':'nome', 'actions':''}
  
  //variable created to later receive ingredients from the service
  recipes: Recipe[] = [];

  recipeMain: RecipeGroup[] = [];

  constructor(
    private sharedService: SharedService,
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    //assign to variable ingredients all ingredients (calling ingredient service)
    this.recipeMain = this.recipeService.getRecipesMain();
  }

  //function called when btnClickEvent (coming from component 'button') is emitted
  goToCreateNew() {
    //send to 'cadastro' route
    this.sharedService.sendTo('receita/cadastro');
    let teste = this.recipeService.getRecipesMain();
    console.log('testando recipemain no component recipe admin', teste);
  }

  //function called when onClickEditEvent (coming from component 'table-filtering') is emitted
  onClickEdit(id: string) {
    //send to 'editar' route, with id parameter
    this.sharedService.sendToId('receita', id);
  }

  //function called when callbackMethodEvent (coming from component 'table-filtering') is emitted
  onDeleteRecipe(id: string) {
    this.recipes = this.recipeService.deleteRecipe(id); //além de modificar no "banco de dados", tem que retornar o valor novo editado
  }

  onDetailsRecipe(id: string) {
    //send to 'editar' route, with id parameter
    this.sharedService.sendToId('receita', id);
  }

}
