
export class Student {
  name: string;
  email: string;
  registerCode: string;
  imagePath: string;
  semester: number;
  studentClass: string;
  constructor(
    name: string,
    email: string,
    registerCode: string,
    imagePath: string,
    semester: number,
    studentClass: string
  ) {
    this.name = name;
    this.email = email;
    this.registerCode = registerCode;
    this.imagePath = imagePath;
    this.semester = semester;
    this.studentClass = studentClass;
  }
}
