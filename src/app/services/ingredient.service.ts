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
    new Ingredient('8', 'Cenoura', Unity.gramas),
    new Ingredient('9', 'Cebola Pera', Unity.gramas),
    new Ingredient('10', 'Salsão', Unity.gramas),
    new Ingredient('11', 'Patinho de Vitelo', Unity.gramas),
    new Ingredient('12', 'Sal Refinado', Unity.gramas),
    new Ingredient('13', 'Pimento do Reino Preta', Unity.gramas),
    new Ingredient('14', 'Atum em Óleo', Unity.gramas),
    new Ingredient('15', 'Alcaparras', Unity.gramas),
    new Ingredient('16', 'Filés de Anchova', Unity.unidade),
    new Ingredient('17', 'Maionese', Unity.gramas),
    new Ingredient('18', 'Rúcula Selvagem', Unity.maço),
    new Ingredient('19', 'Azeite Extra Virgem', Unity.ml),
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

  /*
    get ingredient by id, change to this method when get the info from backend

    updateIngredient(id: string, editedingredient: Ingredient) {
    const index = this.ingredients.findIndex((selectedIngredient) => {
      return id === selectedIngredient.id;
    });
    this.ingredients[index] = editedingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  } */

  //get ingredient by name, change to this method to get by ud when get the info from backend

  updateIngredient(name: string, editedingredient: Ingredient) {
    const index = this.ingredients.findIndex((selectedIngredient) => {
      return name === selectedIngredient.name;
    });
    this.ingredients[index] = editedingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  /*

  get ingredient by id, change to this method when get the info from backend

  deleteIngredient(id: string) {
    this.ingredients = this.ingredients.filter((i)=>{ return i.id !== id});
    return this.ingredients;
  } */


  //get ingredient by name, change to this method to get by ud when get the info from backend

  deleteIngredient(name: string) {
    this.ingredients = this.ingredients.filter((i)=>{ return i.id !== name});
    return this.ingredients;
  }


}
