import { Unity } from './ingredient.model';
export class Recipe {
  recipeMain: RecipeGroup;
  recipeSteps: StepsGroup;
  constructor(
    recipeMain: RecipeGroup,
    recipeSteps: StepsGroup,
  ) {
    this.recipeMain = recipeMain;
    this.recipeSteps = recipeSteps;
  }
}
export interface RecipeGroup {
  name: string;
  id: string;
  imagePath: string;
  description: string;
  discipline: string;
  region: string;
  prepDuration: string;
  yeldis: number;
  prevPrepare?: string;
  chefsNote?: string;
  harmonization?: string;
}
export class StepsGroup {
  section:SectionRecipe[];
  plateUp?: SingleInstruction[];
  equipUtensils?: string[];
}
export interface SectionRecipe {
  sectionName: string;
  ingredients: IngredientGroup;
  prepInstructions: PrepInstructions;
}
export interface IngredientGroup {
  ingredientGroup: IngredientDetails[];
}
export interface IngredientDetails {
  name: string;
  unity: Unity;
  quantity: number;
}
export class SingleInstruction {
  step: number;
  description: string;
  constructor(step: number, description: string) {
    this.step = step;
    this.description = description;
  }
}
export class PrepInstructions {
  instructionSteps?: SingleInstruction[];
  constructor(instructionSteps: SingleInstruction[]) {
    this.instructionSteps = instructionSteps;
  }
}
