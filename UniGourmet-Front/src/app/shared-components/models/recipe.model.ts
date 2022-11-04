import { Discipline } from './discipline.model';
import { Ingredient } from './ingredient.model';

export class Recipe {
  name: string;
  registerCode: string;
  imagePath: string;
  description: string;
  discipline: Discipline;
  region: string;
  prep_duration: string;
  yeldis: number;
  ingredients: SelectedIngredient[];
  prep_instructions: PrepInstructions[];
  plate_up?: SingleInstruction[];
  equip_utensils?: string[];
  chefs_note?: string[];
  harmonization?: string[];
  constructor(
    name: string,
    registerCode: string,
    imagePath: string,
    description: string,
    discipline: Discipline,
    region: string,
    prep_duration: string,
    yeldis: number,
    ingredients: SelectedIngredient[],
    prep_instructions: PrepInstructions[],
    plate_up?: SingleInstruction[],
    equip_utensils?: string[],
    chefs_note?: string[],
    harmonization?: string[]
  ) {
    this.name = name;
    this.registerCode = registerCode;
    this.imagePath = imagePath;
    this.description = description;
    this.discipline = discipline;
    this.region = region;
    this.prep_duration = prep_duration;
    this.yeldis = yeldis;
    this.ingredients = ingredients;
    this.prep_instructions = prep_instructions;
    this.plate_up = plate_up;
    this.equip_utensils = equip_utensils;
    this.chefs_note = chefs_note;
    this.harmonization = harmonization;
  }
}

class SelectedIngredient {
  ingredient: Ingredient;
  quantity: number;

  constructor(ingredient: Ingredient, quantity: number) {
    this.ingredient = ingredient;
    this.quantity = quantity;
  }
}

class SingleInstruction {
  step: number;
  description: string;

  constructor(step: number, description: string) {
    this.step = step;
    this.description = description;
  }
}

class PrepInstructions {
  instruction_name: string;
  instruction_steps: SingleInstruction[];

  constructor(instruction_name: string, instruction_steps: SingleInstruction[]) {
    this.instruction_name = instruction_name;
    this.instruction_steps = instruction_steps;
  }
}


