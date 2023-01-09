import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from '../shared-components/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsChanged = new Subject<Student[]>();

  private students: Student[] = [
    new Student(
      'Graziely Tukozaki',
      'RA123456',
      '../../assets/img/LogoQuadrado.png',
      4,
      "Turma abc"
    ),
    new Student(
      'Thiago Tukozaki',
      'RA654321',
      '../../assets/img/LogoQuadrado.png',
      4,
      "Turma abc"
    )
  ];
  constructor() { }

  getStudents() {
    return this.students;
  }

  /*
  código para quando for utilizar o BD

  async getStudents(): Observable<string[]> {
    const response = new Observable();
    this.students;
  }*/

  getStudent(ra: string) {
    return this.students.find((student) => {
      return student.registerCode == ra;
    });
  }

  addStudent(newStudent: Student) {
    this.students.push(newStudent);
    this.studentsChanged.next(this.students.slice());
  }

  updateStudent(ra: string, editedStudent: Student) {
    const index = this.students.findIndex((student) => {
      return ra === student.registerCode;
    });
    this.students[index] = editedStudent;
    this.studentsChanged.next(this.students.slice());
  }

  deleteStudent(ra: string) {
    console.log('deletando aluno com id: ', ra);

    this.students = this.students.filter((i)=>{ return i.registerCode !== ra});
    return this.students;
  }
}
