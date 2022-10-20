export class StudentClass {
  name_code: string;
  imagePath: string;
  semester: number;
  shift: string;
  category: string;

  constructor(
    name_code: string,
    imagePath: string,
    semester: number,
    shift: string,
    category: string
  ) {
    this.name_code = name_code;
    this.imagePath = imagePath;
    this.semester = semester;
    this.shift = shift;
    this.category = category;
  }
}
