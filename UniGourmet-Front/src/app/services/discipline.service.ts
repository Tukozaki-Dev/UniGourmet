import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Discipline } from '../shared-components/models/discipline.model';

@Injectable({
  providedIn: 'root',
})
export class DisciplineService {
  disciplinesChanged = new Subject<Discipline[]>();

  disciplines: Discipline[] = [
    new Discipline('Buffet e Restauração', 'Sub123450', 4, 20),
    new Discipline('Confeitaria', 'Sub123451', 2, 24),
    new Discipline('Cozinha Asiática', 'Sub123452', 2, 24),
    new Discipline('Cozinha das Américas', 'Sub123453', 2, 24),
    new Discipline('Cozinha Francesa', 'Sub123454', 2, 24),
    new Discipline('Cozinha Italiana', 'Sub123455', 2, 24),
    new Discipline('Cozinha Mediterrânea', 'Sub123456', 2, 24),
    new Discipline('Cozinha Regional Brasileira', 'Sub123457', 2, 24),
    new Discipline('Panificação', 'Sub123458', 2, 24),
    new Discipline('Princípios e Fundamentos da Cozinha', 'Sub123459', 2, 24),
    new Discipline('Técnicas Clássicas', 'Sub123410', 2, 24),
  ];
  constructor() {}

  getDisciplines(){
    return this.disciplines;
  }

  /*
  código para quando for utilizar o BD

  async getStudents(): Observable<string[]> {
    const response = new Observable();
    this.disciplines;
  }*/

  getDiscipline(ra: string) {
    return this.disciplines.find((discipline) => {
      return discipline.registerCode == ra;
    });
  }

  addDiscipline(newStudent: Discipline) {
    this.disciplines.push(newStudent);
    this.disciplinesChanged.next(this.disciplines.slice());
  }

  updateDiscipline(ra: string, editedStudent: Discipline) {
    const index = this.disciplines.findIndex((discipline) => {
      return ra === discipline.registerCode;
    });
    this.disciplines[index] = editedStudent;
    this.disciplinesChanged.next(this.disciplines.slice());
  }

  deleteDiscipline(ra: string) {
    console.log('deletando disciplina com id: ', ra);

    this.disciplines = this.disciplines.filter((i)=>{ return i.registerCode !== ra});
    return this.disciplines;
  }
}
