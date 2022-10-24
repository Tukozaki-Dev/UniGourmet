import { Ingredient } from './ingredient.model';
import { ProfessorSubject } from './professor-subject.model';

export class Recipe {
  name: string;
  registerCode: string;
  imagePath: string;
  description: string;
  subject: ProfessorSubject;
  region: string;
  prep_duration: string;
  yeldis: number;
  ingredients: Ingredient[];
  plate_up?: string[];
  equip_utensils?: string[];
  chefs_note?: string;
  harmonization?: string;
  constructor(
    name: string,
    registerCode: string,
    imagePath: string,
    description: string,
    subject: ProfessorSubject,
    region: string,
    prep_duration: string,
    yeldis: number,
    ingredients: Ingredient[],
    plate_up?: string[],
    equip_utensils?: string[],
    chefs_note?: string,
    harmonization?: string
  ) {
    this.name = name;
    this.registerCode = registerCode;
    this.imagePath = imagePath;
    this.description = description;
    this.subject = subject;
    this.region = region;
    this.prep_duration = prep_duration;
    this.yeldis = yeldis;
    this.ingredients = ingredients;
    this.plate_up = plate_up;
    this.equip_utensils = equip_utensils;
    this.chefs_note = chefs_note;
    this.harmonization = harmonization;
  }
}
