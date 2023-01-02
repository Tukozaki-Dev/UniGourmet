import { Discipline } from './discipline.model';

export class StudentClass {
  class_name: string;
  class_code: number;
  semester: number;
  shift: string;
  category: string;
  discipline: Discipline[];

  constructor(
    class_name: string,
    class_code: number,
    semester: number,
    shift: string,
    category: string,
    discipline: Discipline[],
  ) {
    this.class_name = class_name;
    this.class_code = class_code;
    this.semester = semester;
    this.shift = shift;
    this.category = category;
    this.discipline = discipline;
  }
}
