export class ProfessorSubject {
  name: string;
  registerCode: string;
  semester: number;
  numberOfClasses: number;

  constructor(
    name: string,
    registerCode: string,
    semester: number,
    numberOfClasses: number
  ) {
    this.name = name;
    this.registerCode = registerCode;
    this.semester = semester;
    this.numberOfClasses = numberOfClasses;
  }
}
