import { Discipline } from './discipline.model';

export class StudentClass {
  className: string;
  classCode: number;
  semester: number;
  shift: string;
  category: string;
  disciplines: Discipline[];

  constructor(
    className: string,
    classCode: number,
    semester: number,
    shift: string,
    category: string,
    disciplines: Discipline[],
  ) {
    this.className = className;
    this.classCode = classCode;
    this.semester = semester;
    this.shift = shift;
    this.category = category;
    this.disciplines = disciplines;
  }
}
