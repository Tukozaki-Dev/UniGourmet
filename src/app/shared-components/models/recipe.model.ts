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

export class RecipeGroup {
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
  constructor(
    name: string,
    id: string,
    imagePath: string,
    description: string,
    discipline: string,
    region: string,
    prepDuration: string,
    yeldis: number,
    prevPrepare?: string,
    chefsNote?: string,
    harmonization?: string
  ) {
    this.name = name;
    this.id = id;
    this.imagePath = imagePath;
    this.description = description;
    this.discipline = discipline;
    this.region = region;
    this.prepDuration = prepDuration;
    this.yeldis = yeldis;
    this.prevPrepare = prevPrepare;
    this.chefsNote = chefsNote;
    this.harmonization = harmonization;
  }
}

export class StepsGroup {
  section:SectionRecipe[];
  plateUp?: SingleInstruction[];
  equipUtensils?: string[];
  constructor(
    section?: SectionRecipe[],
    plateUp?: SingleInstruction[],
    equipUtensils?: string[],
  ) {
    this.section = section;
    this.plateUp = plateUp;
    this.equipUtensils = equipUtensils;
  }
}

export interface SectionRecipe{
  sectionName?: string;
  ingredients: IngredientGroup[];
  prepInstructions: PrepInstructions[];
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