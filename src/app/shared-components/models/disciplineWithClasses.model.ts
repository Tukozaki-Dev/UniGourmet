import { Discipline } from "./discipline.model";

export class DisciplineWithClasses {
  subject: Discipline;
  lessons: Lesson[]
  constructor(
    subject: Discipline,
    lessons: Lesson[]
  ) {
    this.subject = subject;
    this.lessons = lessons;
  }
}

export interface Lesson {
  recipeLessons: RecipeLesson [];
}

export interface RecipeLesson {
  recipeName: string,
  recipeId: string,
}
