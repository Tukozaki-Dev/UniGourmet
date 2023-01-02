import { Injectable } from '@angular/core';
import { StudentClass } from '../shared-components/models/student-class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  //studentClasses = ["Turma a", "Turma b", "Turma c", "Turma abc"];

  private studentClasses: StudentClass[] = [
    new StudentClass(
      'Turma abc',
      4,
      'Manhã',
      "Culinária clássica"
    ),
    new StudentClass(
      'Turma a',
      1,
      'Tarde',
      "Culinária moderna"
    ),new StudentClass(
      'Turma b',
      4,
      'Manhã',
      "Panificação"
    ),new StudentClass(
      'Turma c',
      2,
      'Noite',
      "Cozinha Francesa"
    ),

  ];

  constructor() { }

  getClasses() {
    return this.studentClasses;
  }
}
