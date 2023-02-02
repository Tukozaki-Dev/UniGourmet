import { Discipline } from './discipline.model';

export class StudentClass {
  name: string;
  registerCode: string;
  semester: number;
  shift: string;
  category: string;
  disciplines: Discipline[];

  constructor(
    name: string,
    registerCode: string,
    semester: number,
    shift: string,
    category: string,
    disciplines: Discipline[],
  ) {
    this.name = name;
    this.registerCode = registerCode;
    this.semester = semester;
    this.shift = shift;
    this.category = category;
    this.disciplines = disciplines;
  }
}
