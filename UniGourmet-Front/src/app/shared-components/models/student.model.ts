import { StudentClass } from './student-class.model';

export class Student {
  name: string;
  registerCode: string;
  semester: number;
  studantClass: StudentClass;
  constructor(
    name: string,
    registerCode: string,
    semester: number,
    studantClass: StudentClass
  ) {
    this.name = name;
    this.registerCode = registerCode;
    this.semester = semester;
    this.studantClass = studantClass;
  }
}
