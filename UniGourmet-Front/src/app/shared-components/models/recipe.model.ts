import { Unity } from './ingredient.model';
export class Recipe {
  name: string;
  id: string;
  imagePath: string;
  description: string;
  discipline: string;
  region: string;
  prepDuration: string;
  yeldis: number;
  section:SectionRecipe[];
  prevPrepare?: string;
  plateUp?: SingleInstruction[];
  equipUtensils?: string[];
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
    section: SectionRecipe[],
    prevPrepare?: string,
    plateUp?: SingleInstruction[],
    equipUtensils?: string[],
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
    this.section = section;
    this.prevPrepare = prevPrepare;
    this.plateUp = plateUp;
    this.equipUtensils = equipUtensils;
    this.chefsNote = chefsNote;
    this.harmonization = harmonization;
  }
}
export interface SectionRecipe{
  ingredients?: SelectedIngredient[];
  prepInstructions?: PrepInstructions[];
}
export interface SelectedIngredient {
  selectedIngredients: IngredientDetails[];
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
  instructionName: string;
  instructionSteps: SingleInstruction[];
  constructor(instructionName: string, instructionSteps: SingleInstruction[]) {
    this.instructionName = instructionName;
    this.instructionSteps = instructionSteps;
  }
}