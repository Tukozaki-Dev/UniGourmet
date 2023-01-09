import { Discipline } from "./discipline.model";

export class DisciplineWithClasses {
  subject: Discipline;
  lessons: [{
    recipeName: string,
    recipeId: string
  }]
  constructor(
    subject: Discipline,
    lessons: [{ recipeName: string, recipeId: string}]
  ) {
    this.subject = subject;
    this.lessons = lessons;
  }
}
