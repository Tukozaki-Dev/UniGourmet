import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Unity } from '../shared-components/models/ingredient.model';
import { PrepInstructions, Recipe, RecipeGroup, SingleInstruction, StepsGroup } from '../shared-components/models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      {
        name: "Vitelo Tonnato Alla Piemontese (Vitelo com Molho de Atum)",
        id: "CM0032",
        imagePath: "https://winedharma.com/wine-dharma/uploads/2020/10/1938-vitello-tonnato-ricetta-originale-piemontese-vitello-con-tonno-capperi-e-uovo.jpg",
        description:"Vitello tonnato é uma clássica entrada da culinária italiana que combina a maciez da vitela com um saboroso molho de atum.",
        discipline:"Cozinha Italiana",
        region: "Italia/Piemonte",
        prepDuration: "1 hora",
        yeldis:2,
        prevPrepare: "Algum preparo prévio, como deixar marinando",
        chefsNote: "Alguma dica ou anotação específica do chef",
        harmonization: "Vinho Tinto, Chianti",
      },
      {
        section:[
          {
            sectionName: 'Vitello',
            ingredients: {
              ingredientGroup: [
                {name: 'Cenoura', unity: Unity.gramas, quantity: 60},
                {name: 'Cebola Pera', unity: Unity.gramas, quantity: 60},
                {name: 'Salsão', unity: Unity.gramas, quantity: 80},
                {name: 'Patinho de Vitelo', unity: Unity.gramas, quantity: 220},
                {name: 'Sal Refinado', unity: Unity.gramas, quantity: 15},
                {name: 'Pimento do Reino Preta', unity: Unity.gramas, quantity: 10},
              ]
            },
            prepInstructions: {
              instructionSteps: [
                {step: 1, description: 'Preparar um fundo de vegetais com a cenoura, a cebola e o salsão cortados rusticamente.'},
                {step: 2, description: 'Após 20 minutos acrescentar a carne temperada e deixar cozinhar por cerca de 20 minutos ou até estar macia.'},
                {step: 3, description: 'Retirar a carne do caldo, escorrer, resfriar e cortar em fatias muito finas. Reservar refrigerado.'},
              ]
            }
          },
          {
            sectionName: 'Molho e Finalização',
            ingredients: {
              ingredientGroup: [
                {name: 'Atum em Óleo', unity: Unity.gramas, quantity: 120},
                {name: 'Alcaparras', unity: Unity.gramas, quantity: 30},
                {name: 'Filés de Anchova', unity: Unity.unidade, quantity: 4},
                {name: 'Maionese', unity: Unity.gramas, quantity: 100},
                {name: 'Sal Refinado', unity: Unity.gramas, quantity: 5},
                {name: 'Pimento do Reino Preta', unity: Unity.gramas, quantity: 5},
                {name: 'Rúcula Selvagem', unity: Unity.maço, quantity: 0.17},
                {name: 'Azeite Extra Virgem', unity: Unity.ml, quantity: 10},
              ]
            },
            prepInstructions: {
              instructionSteps: [
                {step: 1, description: 'Preparar o molho processando o atum, metade das alcaparras, as anchovas e a maionese, alongando com um pouco do fundo.'},
                {step: 2, description: 'Distribuir as fatias de vitelo sobre o prato.'},
                {step: 3, description: 'Dispor o molho frio sobre a carne fria.'},
                {step: 4, description: 'Decorar com as alcaparras restantes e a rúcula temperada com azeite e sal.'},
              ]
            }
          },
        ],
        plateUp: [
          {step: 1, description: 'passo 1 do empratamento'},
          {step: 2, description: 'passo 2 do empratamento'},
          {step: 3, description: 'passo 3 do empratamento'},
        ],
        equipUtensils: ['satoir','espátula','faca de chef','moedor de pimenta','liquidificador']
      }
    ),
    new Recipe(
      {
        name: "Bagna Caoda",
        id: "CM0048",
        imagePath: "../../assets/img/LogoQuadrado.png",
        description:"A Bagna càuda é um prato típico da culinária do Piemonte. É feito com alho, azeite de oliva, creme de leite fresco, manteiga e anchovas, variando as proporções de acordo com a região e o gosto pessoal.",
        discipline:"Cozinha Italiana",
        region: "Italia/Piemonte",
        prepDuration: "1 hora",
        yeldis:10,
        prevPrepare: "Algum preparo prévio, como deixar marinando",
        chefsNote: "Alguma dica ou anotação específica do chef",
        harmonization: "Vinho Tinto, Chianti",
      },
      {
        section:[
          {
            sectionName: 'Bagna Caoda',
            ingredients: {
              ingredientGroup: [
                {name: 'Alho in Natura', unity: Unity.cabeça, quantity: 5},
                {name: 'Filés de Anchova', unity: Unity.gramas, quantity: 250},
                {name: 'Azeite Extra Virgem', unity: Unity.ml, quantity: 400},
                {name: 'Manteiga Integral sem Sal', unity: Unity.gramas, quantity: 100},
              ]
            },
            prepInstructions: {
              instructionSteps: [
                {step: 1, description: 'Cortar o alho em brunoise fina e os filés de anchova rusticamente.'},
                {step: 2, description: 'Numa panela, colocar o azeite, a manteiga, o alho e os filés de anchova.'},
                {step: 3, description: 'Levar ao fogo brando e cozinhar por cerca de 20 minutos, sem que ferva e o alho doure. Reservar.'},
              ]
            }
          },
          {
            sectionName: 'Acompanhamento e Serviço',
            ingredients: {
              ingredientGroup: [
                {name: 'Filé Mignon Bovino Limpo', unity: Unity.gramas, quantity: 300},
                {name: 'Pimentão Vermelho', unity: Unity.unidade, quantity: 1},
                {name: 'Pimentão Amarelo', unity: Unity.unidade, quantity: 1},
                {name: 'Cebola Pera', unity: Unity.unidade, quantity: 2},
                {name: 'Beterraba', unity: Unity.unidade, quantity: 1},
                {name: 'Abobrinha Italiana', unity: Unity.unidade, quantity: 2},
                {name: 'Azeite Extra Virgem', unity: Unity.ml, quantity: 50},
                {name: 'Erva Doce Fresca', unity: Unity.unidade, quantity: 2},
                {name: 'Pão Italiano em Filão', unity: Unity.unidade, quantity: 0.33},
              ]
            },
            prepInstructions: {
              instructionSteps: [
                {step: 1, description: 'Preparar o molho processando o atum, metade das alcaparras, as anchovas e a maionese, alongando com um pouco do fundo.'},
                {step: 2, description: 'Distribuir as fatias de vitelo sobre o prato.'},
                {step: 3, description: 'Dispor o molho frio sobre a carne fria.'},
                {step: 4, description: 'Decorar com as alcaparras restantes e a rúcula temperada com azeite e sal.'},
              ]
            }
          },
        ],
        plateUp: [
          {step: 1, description: 'passo 1 do empratamento'},
          {step: 2, description: 'passo 2 do empratamento'},
          {step: 3, description: 'passo 3 do empratamento'},
        ],
        equipUtensils: ['satoir','espátula','faca de chef','moedor de pimenta','liquidificador']
      }
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes;
  }

  getRecipesMain() {
    return this.recipes.find((recipe) => {
      return recipe.recipeMain;
    })
  }

  /*
  código para quando for utilizar o BD

  async getRecipes(): Observable<string[]> {
    const response = new Observable();
    this.recipes;
  }*/

  getRecipe(id: string) {
    return this.recipes.find((recipe) => {
      return recipe.recipeMain.id == id;
    });
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    console.log(this.recipes);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: string, editedRecipe: Recipe) {
    const index = this.recipes.findIndex((recipe) => {
      return id === recipe.recipeMain.id;
    });
    this.recipes[index] = editedRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: string) {
    console.log('deletando ingrediente com id: ', id);

    this.recipes = this.recipes.filter((i) => {
      return i.recipeMain.id !== id;
    });
    return this.recipes;
  }
}
