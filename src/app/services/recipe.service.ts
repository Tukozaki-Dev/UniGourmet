import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Unity } from '../shared-components/models/ingredient.model';
import { Recipe } from '../shared-components/models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Mjadra (Arroz com Lentilha e Cebola Caramelizada',
      'CM0032',
      '../../assets/img/LogoQuadrado.png',
      'uma breve descrição da receita, como sua origem',
      'Cozinha Mediterrânea',
      'Europa/Mar Mediterrâneo',
      '1h30',
      3,
      [
        {
          selectedIngredients: [
            { name: 'Lentilha', unity: Unity.gramas, quantity: 100 },
            { name: 'Arroz', unity: Unity.gramas, quantity: 200 },
            { name: 'Feijão', unity: Unity.gramas, quantity: 300 },
            { name: 'Macarrão', unity: Unity.gramas, quantity: 400 },
            { name: 'Ervilha', unity: Unity.gramas, quantity: 500 },
          ],
        },
      ],
      [
        {
          instructionName: 'Massa',
          instructionSteps: [
            { step: 1, description: 'Descrição passo 1' },
            { step: 2, description: 'Descrição passo 2' },
            { step: 3, description: 'Descrição passo 3' },
            { step: 4, description: 'Descrição passo 4' },
          ],
        },
        {
          instructionName: 'Recheio',
          instructionSteps: [
            { step: 1, description: 'Descrição passo 1' },
            { step: 2, description: 'Descrição passo 2' },
            { step: 3, description: 'Descrição passo 3' },
            { step: 4, description: 'Descrição passo 4' },
          ],
        },
      ],
      [
        { step: 1, description: 'Descrição passo 1' },
        { step: 2, description: 'Descrição passo 2' },
        { step: 3, description: 'Descrição passo 3' },
        { step: 4, description: 'Descrição passo 4' },
      ],
      ['panela', 'colher', 'tábua'],
      'esta é uma observação do chef sobre a receita',
      ['vinho tinto', 'bourdeaux', 'vinho encorpado']
    ),
    new Recipe(
      'Couscous',
      'CM0040',
      '../../assets/img/LogoQuadrado.png',
      'uma breve descrição da receita, como sua origem',
      'Cozinha Mediterrânea',
      'Europa/Mar Mediterrâneo',
      '1h30',
      3,
      [
        {
          selectedIngredients: [
            { name: 'Lentilha', unity: Unity.gramas, quantity: 100 },
            { name: 'Arroz', unity: Unity.gramas, quantity: 200 },
            { name: 'Feijão', unity: Unity.gramas, quantity: 300 },
            { name: 'Macarrão', unity: Unity.gramas, quantity: 400 },
            { name: 'Ervilha', unity: Unity.gramas, quantity: 500 },
          ],
        },
      ],
      [
        {
          instructionName: 'Massa',
          instructionSteps: [
            { step: 1, description: 'Descrição passo 1' },
            { step: 2, description: 'Descrição passo 2' },
            { step: 3, description: 'Descrição passo 3' },
            { step: 4, description: 'Descrição passo 4' },
          ],
        },
        {
          instructionName: 'Recheio',
          instructionSteps: [
            { step: 1, description: 'Descrição passo 1' },
            { step: 2, description: 'Descrição passo 2' },
            { step: 3, description: 'Descrição passo 3' },
            { step: 4, description: 'Descrição passo 4' },
          ],
        },
      ],
      [
        { step: 1, description: 'Descrição passo 1' },
        { step: 2, description: 'Descrição passo 2' },
        { step: 3, description: 'Descrição passo 3' },
        { step: 4, description: 'Descrição passo 4' },
      ],
      ['panela', 'colher', 'tábua'],
      'esta é uma observação do chef sobre a receita',
      ['vinho tinto', 'bourdeaux', 'vinho encorpado']
    ),
  ];
  constructor() {}

  getRecipes() {
    return this.recipes;
  }

  /* 
  código para quando for utilizar o BD
  
  async getRecipes(): Observable<string[]> {
    const response = new Observable();
    this.recipes;
  }*/

  getRecipe(id: string) {
    return this.recipes.find((recipe) => {
      return recipe.id == id;
    });
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: string, editedRecipe: Recipe) {
    const index = this.recipes.findIndex((recipe) => {
      return id === recipe.id;
    });
    this.recipes[index] = editedRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: string) {
    console.log('deletando ingrediente com id: ', id);

    this.recipes = this.recipes.filter((i) => {
      return i.id !== id;
    });
    return this.recipes;
  }
}
