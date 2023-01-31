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
      new RecipeGroup(
        "Apple Pie",
        "12345",
        "./assets/apple-pie.jpg",
        "A delicious classic American dessert",
        "Dessert",
        "USA",
        "1 hour",
        8,
        "Chill the crust in the fridge for 30 minutes",
        "Use Granny Smith apples for a tart flavor",
        "Vanilla ice cream",
      ),
      new StepsGroup(
        [
          {
            sectionName: "Crust",
            ingredients: [
              {
                ingredientGroup: [
                  {
                    name: "All-Purpose Flour",
                    unity: Unity.gramas,
                    quantity: 2.5
                  },
                  {
                    name: "Salt",
                    unity: Unity.gramas,
                    quantity: 0.5
                  },
                  {
                    name: "Unsalted Butter",
                    unity: Unity.gramas,
                    quantity: 10
                  },
                  {
                    name: "Ice Water",
                    unity: Unity.gramas,
                    quantity: 5
                  },
                ]
              },
            ],
            prepInstructions: [ 
              new PrepInstructions([
                new SingleInstruction(1, "Peel, core, and thinly slice the apples."),
                new SingleInstruction(2, "In a large bowl, combine the apples, sugar, lemon juice, cinnamon, and nutmeg."),
                new SingleInstruction(3, "Set aside for 15 minutes to let the flavors meld."),
              ]),
            ]
          },
          {
            sectionName: "Filling",
            ingredients: [
              {
                ingredientGroup: [
                  {
                    name: "Granny Smith Apples",
                    unity: Unity.gramas,
                    quantity: 6
                  },
                  {
                    name: "Sugar",
                    unity: Unity.gramas,
                    quantity: 1.5
                  },
                  {
                    name: "Lemon Juice",
                    unity: Unity.gramas,
                    quantity: 1
                  },
                  {
                    name: "Cinnamon",
                    unity: Unity.gramas,
                    quantity: 1
                  },
                  {
                    name: "Nutmeg",
                    unity: Unity.gramas,
                    quantity: 0.5
                  },
                ]
              },
            ],
            prepInstructions: [ 
              new PrepInstructions([
                new SingleInstruction(1, "Peel, core, and thinly slice the apples."),
                new SingleInstruction(2, "In a large bowl, combine the apples, sugar, lemon juice, cinnamon, and nutmeg."),
                new SingleInstruction(3, "Set aside for 15 minutes to let the flavors meld."),
              ]), 
            ],
          },
        ],
        [
          new SingleInstruction(1, "Peel, core, and thinly slice the apples."),
          new SingleInstruction(2, "In a large bowl, combine the apples, sugar, lemon juice, cinnamon, and nutmeg."),
          new SingleInstruction(3, "Set aside for 15 minutes to let the flavors meld."),
        ],
        ['aa','bb','cc','dd']
      ),
    ),

    new Recipe(
      new RecipeGroup(
      "Lemon Meringue Pie",
      "67890",
      "./assets/lemon-meringue.jpg",
      "A sweet and tangy dessert with a fluffy meringue topping",
      "Dessert",
      "Europe",
      "2 hours",
      8,
      "Chill the pie in the fridge for at least 1 hour before serving",
      "Use fresh lemon juice for the best flavor",
      "Whipped cream",
      ),
      new StepsGroup(
        [
          {
            sectionName: "Crust",
            ingredients: [
              {
                ingredientGroup: [
                  {
                    name: "All-Purpose Flour",
                    unity: Unity.gramas,
                    quantity: 2.5
                  },
                  {
                    name: "Salt",
                    unity: Unity.gramas,
                    quantity: 0.5
                  },
                  {
                    name: "Unsalted Butter",
                    unity: Unity.gramas,
                    quantity: 10
                  },
                  {
                    name: "Ice Water",
                    unity: Unity.gramas,
                    quantity: 5
                  },
                ]
              },
            ],
            prepInstructions: [ 
              new PrepInstructions([
                new SingleInstruction(1, "Peel, core, and thinly slice the apples."),
                new SingleInstruction(2, "In a large bowl, combine the apples, sugar, lemon juice, cinnamon, and nutmeg."),
                new SingleInstruction(3, "Set aside for 15 minutes to let the flavors meld."),
              ]),
            ]
          },
          {
            sectionName: "Filling",
            ingredients: [
              {
                ingredientGroup: [
                  {
                    name: "Granny Smith Apples",
                    unity: Unity.gramas,
                    quantity: 6
                  },
                  {
                    name: "Sugar",
                    unity: Unity.gramas,
                    quantity: 1.5
                  },
                  {
                    name: "Lemon Juice",
                    unity: Unity.gramas,
                    quantity: 1
                  },
                  {
                    name: "Cinnamon",
                    unity: Unity.gramas,
                    quantity: 1
                  },
                  {
                    name: "Nutmeg",
                    unity: Unity.gramas,
                    quantity: 0.5
                  },
                ]
              },
            ],
            prepInstructions: [ 
              new PrepInstructions([
                new SingleInstruction(1, "Peel, core, and thinly slice the apples."),
                new SingleInstruction(2, "In a large bowl, combine the apples, sugar, lemon juice, cinnamon, and nutmeg."),
                new SingleInstruction(3, "Set aside for 15 minutes to let the flavors meld."),
              ]), 
            ],
          },
        ],
        [
          new SingleInstruction(1, "Peel, core, and thinly slice the apples."),
          new SingleInstruction(2, "In a large bowl, combine the apples, sugar, lemon juice, cinnamon, and nutmeg."),
          new SingleInstruction(3, "Set aside for 15 minutes to let the flavors meld."),
        ],
        ['aa','bb','cc','dd']
      ),
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
