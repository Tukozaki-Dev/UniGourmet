import { Unity } from './../shared-components/models/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared-components/models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  ingredientsChanged = new Subject<Ingredient[]>();

  unities = [
    'Quilo','Litro','Dente','Ramo','Pitada','Cabeça','Unidade','Fatia','Talo','Folha','Pedaço','Gramas','ml'
    ];

  private ingredients: Ingredient[] = [
    new Ingredient('1', 'Batata', Unity.gramas),
    new Ingredient('2', 'Arroz', Unity.gramas),
    new Ingredient('3', 'Tomate', Unity.unidade),
    new Ingredient('4', 'Feijão', Unity.gramas),
    new Ingredient('5', 'Gergelim', Unity.gramas),
    new Ingredient('6', 'Farinha de trigo', Unity.gramas),
    new Ingredient('7', 'Berinjela', Unity.gramas),
    new Ingredient('8', 'Abobrinha', Unity.gramas),
  ];

  constructor() {}

  getUnities(){
    return this.unities;
  }
  getIngredients() {
    return this.ingredients;
  }

  // getIngredients(): Observable<Ingredient[]> {
  //   const ingredients = of(this.ingredients);
  //   return ingredients;
  // }

  /*
  código para quando for utilizar o BD

  async getIngredients(): Observable<string[]> {
    const response = new Observable();
    this.ingredients;
  }*/

  getIngredient(id: string) {
    return this.ingredients.find((ingredient) => {
      return ingredient.id == id;
    });
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(id: string, editedingredient: Ingredient) {
    const index = this.ingredients.findIndex((ingredient) => {
      return id === ingredient.id;
    });
    this.ingredients[index] = editedingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(id: string) {
    console.log('deletando ingrediente com id: ', id);

    this.ingredients = this.ingredients.filter((i)=>{ return i.id !== id});
    return this.ingredients;
  }
}
