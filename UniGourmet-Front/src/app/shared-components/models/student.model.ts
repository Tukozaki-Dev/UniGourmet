
export class Student {
  name: string;
  registerCode: string;
  imagePath: string;
  semester: number;
  studentClass: string;
  constructor(
    name: string,
    registerCode: string,
    imagePath: string,
    semester: number,
    studentClass: string
  ) {
    this.name = name;
    this.registerCode = registerCode;
    this.imagePath = imagePath;
    this.semester = semester;
    this.studentClass = studentClass;
  }
}
