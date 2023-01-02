export class StudentClass {
  class_code: string;
  semester: number;
  shift: string;
  category: string;

  constructor(
    class_code: string,
    semester: number,
    shift: string,
    category: string
  ) {
    this.class_code = class_code;
    this.semester = semester;
    this.shift = shift;
    this.category = category;
  }
}
