import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StudentClass } from '../shared-components/models/student-class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classChanged = new Subject<StudentClass[]>();

  private semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  private classesCategories = ["Presencial", "EAD", "Semi-Presencial"];

  private shifts = ["Manhã","Tarde","Noite"];

  private studentClasses: StudentClass[] = [
    new StudentClass(
      'Turma abc',
      1,
      4,
      'Manhã',
      "Presencial",
      [
        {
          name: 'Cozinha das Américas',
          registerCode: 'Sub123453',
          semester: 4,
          numberOfClasses: 20,
        },
        {
          name: 'Cozinha Regional Brasileira',
          registerCode: 'Sub123457',
          semester: 2,
          numberOfClasses: 24,
        },
        {
          name: 'Cozinha Asiática',
          registerCode: 'Sub123452',
          semester: 2,
          numberOfClasses: 24,
        },
        {
          name: 'Cozinha Italiana',
          registerCode: 'Sub123455',
          semester: 2,
          numberOfClasses: 24,
        },
      ]
    ),
    new StudentClass(
      'Turma a',
      1,
      4,
      'Manhã',
      "Presencial",
      [
        {
          name: 'Cozinha das Américas',
          registerCode: 'Sub123453',
          semester: 4,
          numberOfClasses: 20,
        },
        {
          name: 'Cozinha Regional Brasileira',
          registerCode: 'Sub123457',
          semester: 2,
          numberOfClasses: 24,
        },
        {
          name: 'Cozinha Regional Brasileira',
          registerCode: 'Sub123457',
          semester: 2,
          numberOfClasses: 24,
        },
        {
          name: 'Cozinha Regional Brasileira',
          registerCode: 'Sub123457',
          semester: 2,
          numberOfClasses: 24,
        },
      ]
    ),
    new StudentClass(
      'Turma b',
      1,
      4,
      'Manhã',
      "Presencial",
      [
        {
          name: 'Cozinha das Américas',
          registerCode: 'Sub123453',
          semester: 4,
          numberOfClasses: 20,
        },
        {
          name: 'Cozinha Regional Brasileira',
          registerCode: 'Sub123457',
          semester: 2,
          numberOfClasses: 24,
        },
        {
          name: 'Cozinha Regional Brasileira',
          registerCode: 'Sub123457',
          semester: 2,
          numberOfClasses: 24,
        },
        {
          name: 'Cozinha Regional Brasileira',
          registerCode: 'Sub123457',
          semester: 2,
          numberOfClasses: 24,
        },
      ]
    ),
    new StudentClass(
      'Turma c',
      1,
      4,
      'Manhã',
      "Presencial",
      [
        {
          name: 'Cozinha das Américas',
          registerCode: 'Sub123453',
          semester: 4,
          numberOfClasses: 20,
        },
        {
          name: 'Cozinha Regional Brasileira',
          registerCode: 'Sub123457',
          semester: 2,
          numberOfClasses: 24,
        },
        {
          name: 'Cozinha Regional Brasileira',
          registerCode: 'Sub123457',
          semester: 2,
          numberOfClasses: 24,
        },
        {
          name: 'Cozinha Regional Brasileira',
          registerCode: 'Sub123457',
          semester: 2,
          numberOfClasses: 24,
        },
      ]
    ),

  ];

  constructor() { }

  getClasses() {
    return this.studentClasses;
  }

  getClass(id: number) {
    return this.studentClasses.find((studentClass) => {
      return studentClass.classCode == id;
    });
  }

  getSemesters(){
    return this.semesters;
  }

  getClassesCategories(){
    return this.classesCategories;
  }

  getShifts(){
    return this.shifts;
  }

  addClass(newClass: StudentClass) {
    this.studentClasses.push(newClass);
    this.classChanged.next(this.studentClasses.slice());
  }

  updateClass(id: number, editedClass: StudentClass) {
    const index = this.studentClasses.findIndex((selectedClass) => {
      return id === selectedClass.classCode;
    });
    this.studentClasses[index] = editedClass;
    this.classChanged.next(this.studentClasses.slice());
  }

  deleteProfessor(ra: number) {
    console.log('deletando turma com id: ', ra);

    this.studentClasses = this.studentClasses.filter((i)=>{ return i.classCode !== ra});
    return this.studentClasses;
  }


}
