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
          ingredients: [
            {
              selectedIngredients: [
                { name: 'Lentilha', unity: Unity.gramas, quantity: 100 },
                { name: 'Arroz', unity: Unity.gramas, quantity: 200 },
                { name: 'Feijão', unity: Unity.gramas, quantity: 300 },
                { name: 'Macarrão', unity: Unity.gramas, quantity: 400 },
                { name: 'Ervilha', unity: Unity.gramas, quantity: 500 },
              ]
            }
          ],
          prepInstructions: [
            {
              instructionName: 'Massa', instructionSteps: [
                {step: 1, description: 'descricao numero um da massa'},
                {step: 2, description: 'descricao numero dois da massa'},
                {step: 3, description: 'descricao numero tres da massa'},
                {step: 3, description: 'descricao numero quatro da massa'},
              ]
            },
            {
              instructionName: 'Recheio', instructionSteps: [
                {step: 1, description: 'descricao numero um do recheio'},
                {step: 2, description: 'descricao numero dois do recheio'},
                {step: 3, description: 'descricao numero tres do recheio'},
                {step: 3, description: 'descricao numero quatro do recheio'},
              ]
            }
          ]
        }
      ],
      'preparo previo',
      [
        {step: 1, description: 'descricao numero um do empratamento'},
        {step: 2, description: 'descricao numero um do empratamento'},
        {step: 3, description: 'descricao numero um do empratamento'},
        {step: 4, description: 'descricao numero um do empratamento'},
      ],
      ['colher', 'garfo', 'panela', 'grelha', 'fouet'],
      'esta é uma observação do chef sobre a receita',
      'vinho tinto'
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
          ingredients: [
            {
              selectedIngredients: [
                { name: 'Lentilha', unity: Unity.gramas, quantity: 100 },
                { name: 'Arroz', unity: Unity.gramas, quantity: 200 },
                { name: 'Feijão', unity: Unity.gramas, quantity: 300 },
                { name: 'Macarrão', unity: Unity.gramas, quantity: 400 },
                { name: 'Ervilha', unity: Unity.gramas, quantity: 500 },
              ]
            }
          ],
          prepInstructions: [
            {
              instructionName: 'Massa', instructionSteps: [
                {step: 1, description: 'descricao numero um da massa'},
                {step: 2, description: 'descricao numero dois da massa'},
                {step: 3, description: 'descricao numero tres da massa'},
                {step: 3, description: 'descricao numero quatro da massa'},
              ]
            },
            {
              instructionName: 'Recheio', instructionSteps: [
                {step: 1, description: 'descricao numero um do recheio'},
                {step: 2, description: 'descricao numero dois do recheio'},
                {step: 3, description: 'descricao numero tres do recheio'},
                {step: 3, description: 'descricao numero quatro do recheio'},
              ]
            }
          ]
        }
      ],
      'preparo previo',
      [
        {step: 1, description: 'descricao numero um do empratamento'},
        {step: 2, description: 'descricao numero um do empratamento'},
        {step: 3, description: 'descricao numero um do empratamento'},
        {step: 4, description: 'descricao numero um do empratamento'},
      ],
      ['colher', 'garfo', 'panela', 'grelha', 'fouet'],
      'esta é uma observação do chef sobre a receita',
      'vinho tinto'
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
