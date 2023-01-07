import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
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
  displayedColumns: string[] = ['id', 'name', 'actions'];
  
  //variable created to later receive ingredients from the service
  recipes: Recipe[] = [];

  constructor(
    private router: Router,
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    //assign to variable ingredients all ingredients (calling ingredient service)
    this.recipes = this.recipeService.getRecipes();
  }

  //function called when btnClickEvent (coming from component 'button') is emitted
  goToCreateNew() {
    //send to 'cadastro' route
    this.router.navigate(['receita/cadastro']);
  }

  //function called when onClickEditEvent (coming from component 'table-filtering') is emitted
  onClickEdit(id: string) {
    //send to 'editar' route, with id parameter
    this.router.navigate(['receita', id]);
  }

  //function called when callbackMethodEvent (coming from component 'table-filtering') is emitted
  onDeleteIngredient(id: string) {
    this.recipes = this.recipeService.deleteRecipe(id); //além de modificar no "banco de dados", tem que retornar o valor novo editado
  }

}
