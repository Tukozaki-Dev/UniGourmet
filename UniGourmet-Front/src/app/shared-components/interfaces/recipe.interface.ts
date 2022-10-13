import { IIngredient } from "./ingredient.interface";

export interface IRecipe {
    image: string;
    name: string;
    description: string;
    subject: string;
    region: string;
    prep_duration: string;
    yeldis: number;
    ingredients_1: IIngredient;
    ingredients_2?: IIngredient;
    ingredients_3?: IIngredient;
    preparation_1: string;
    preparation_2?: string;
    preparation_3?: string;
    plate_up?: string;
    equip_utensils?: string;
    chefs_note?: string;
    harmonization?: string;
}