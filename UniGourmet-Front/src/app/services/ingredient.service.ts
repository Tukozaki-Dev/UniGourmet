import { Unity } from './../shared-components/models/ingredient.model';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Ingredient } from '../shared-components/models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('1', 'batata', Unity.gramas),
    new Ingredient('2', 'arroz', Unity.gramas),
    new Ingredient('3', 'tomate', Unity.unidade),
    new Ingredient('4', 'feijão', Unity.gramas),
    new Ingredient('5', 'gergelim', Unity.gramas),
    new Ingredient('6', 'farinha de trigo', Unity.gramas),
    new Ingredient('7', 'berinjela', Unity.gramas),
    new Ingredient('8', 'abobrinha', Unity.gramas),
  ];

  constructor() {}

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

  getIngredient(name: string) {
    return this.ingredients.find((ingredient) => {
      return ingredient.name == name;
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
