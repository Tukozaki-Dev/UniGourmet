import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Unity } from '../shared-components/models/ingredient.model';
import { Recipe } from '../shared-components/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Mjadra (Arroz com Lentilha e Cebola Caramelizada',
      'CM0032',
      '../../assets/img/LogoQuadrado.png',
      'uma breve descrição da receita, como sua origem',
      {
        name: 'Cozinha Mediterrânea',
        registerCode: 'Sub123321',
        semester: 4,
        numberOfClasses: 20,
      },
      'Europa/Mar Mediterrâneo',
      '1h30',
      3,
      [
        {ingredient: {name: 'Lentilha', unity: Unity.gramas}, quantity: 100},
        {ingredient: {name: 'Arroz', unity: Unity.gramas}, quantity: 200},
        {ingredient: {name: 'Feijão', unity: Unity.gramas}, quantity: 300},
        {ingredient: {name: 'Macarrão', unity: Unity.gramas}, quantity: 400},
        {ingredient: {name: 'Ervilha', unity: Unity.gramas}, quantity: 500},
        
      ],
      [
        {instruction_name: 'Massa', 
         instruction_steps: [
          {step: 1, description: 'Descrição passo 1'},
          {step: 2, description: 'Descrição passo 2'},
          {step: 3, description: 'Descrição passo 3'},
          {step: 4, description: 'Descrição passo 4'},
        ]},
        {instruction_name: 'Recheio', 
         instruction_steps: [
          {step: 1, description: 'Descrição passo 1'},
          {step: 2, description: 'Descrição passo 2'},
          {step: 3, description: 'Descrição passo 3'},
          {step: 4, description: 'Descrição passo 4'},
        ]},
      ],
      [
        {step: 1, description: 'Descrição passo 1'},
        {step: 2, description: 'Descrição passo 2'},
        {step: 3, description: 'Descrição passo 3'},
        {step: 4, description: 'Descrição passo 4'},
      ],
      ['panela', 'colher', 'tábua'],
      ['esta é uma observação do chef sobre a receita', 'esta é outra observação do chef sobre a receita'],
      ['vinho tinto', 'bourdeaux', 'vinho encorpado'],
    ),
    new Recipe(
      'Couscous',
      'CM0040',
      '../../assets/img/LogoQuadrado.png',
      'uma breve descrição da receita, como sua origem',
      {
        name: 'Cozinha Mediterrânea',
        registerCode: 'Sub123987',
        semester: 4,
        numberOfClasses: 20,
      },
      'Europa/Mar Mediterrâneo',
      '1h30',
      3,
      [
        {ingredient: {name: 'Lentilha', unity: Unity.gramas}, quantity: 100},
        {ingredient: {name: 'Arroz', unity: Unity.gramas}, quantity: 200},
        {ingredient: {name: 'Feijão', unity: Unity.gramas}, quantity: 300},
        {ingredient: {name: 'Macarrão', unity: Unity.gramas}, quantity: 400},
        {ingredient: {name: 'Ervilha', unity: Unity.gramas}, quantity: 500},
      ],
      [
          {instruction_name: 'Massa', 
           instruction_steps: [
            {step: 1, description: 'Descrição passo 1'},
            {step: 2, description: 'Descrição passo 2'},
            {step: 3, description: 'Descrição passo 3'},
            {step: 4, description: 'Descrição passo 4'},
          ]},
          {instruction_name: 'Recheio', 
           instruction_steps: [
            {step: 1, description: 'Descrição passo 1'},
            {step: 2, description: 'Descrição passo 2'},
            {step: 3, description: 'Descrição passo 3'},
            {step: 4, description: 'Descrição passo 4'},
          ]},
      ],
      [
        {step: 1, description: 'Descrição passo 1'},
        {step: 2, description: 'Descrição passo 2'},
        {step: 3, description: 'Descrição passo 3'},
        {step: 4, description: 'Descrição passo 4'},
      ],
      ['panela', 'colher', 'tábua'],
      ['esta é uma observação do chef sobre a receita', 'esta é outra observação do chef sobre a receita'],
      ['vinho tinto', 'bourdeaux', 'vinho encorpado'],
    )
  ];
  constructor() { }

  // getRecipes() {
  //   return this.recipes;
  // }

  /* 
  código para quando for utilizar o BD
  
  async getRecipes(): Observable<string[]> {
    const response = new Observable();
    this.recipes;
  }*/

  // getRecipe(rc: string) {
  //   return this.recipes.find((recipe) => {
  //     return recipe.registerCode == rc;
  //   });
  // }

  // addRecipe(newRecipe: Recipe) {
  //   this.recipes.push(newRecipe);
  //   this.recipesChanged.next(this.recipes.slice());
  // }

  // updateRecipe(rc: string, editedRecipe: Recipe) {
  //   const index = this.recipes.findIndex((recipe) => {
  //     return rc === recipe.registerCode;
  //   });
  //   this.recipes[index] = editedRecipe;
  //   this.recipesChanged.next(this.recipes.slice());
  // }

}
