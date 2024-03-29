import { Injectable } from '@angular/core';
import { Professor } from '../shared-components/models/professor.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  professorsChanged = new Subject<Professor[]>();

  private professors: Professor[] = [
    new Professor(
      'Graziely Tukozaki',
      'email@email.com',
      'RA123456',
      '../../assets/img/LogoQuadrado.png',
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
      ],
      [
        { name: 'Carne', id: 2 },
        { name: 'Peixe', id: 8 },
        { name: 'Massa', id: 7 },
      ]
    ),
    new Professor(
      'Izabela Soares',
      'email@email.com',
      'RA123457',
      '../../assets/img/LogoQuadrado.png',
      [
        {
          name: 'Cozinha Francesa',
          registerCode: 'Sub123454',
          semester: 4,
          numberOfClasses: 20,
        },
        {
          name: 'Cozinha Italiana',
          registerCode: 'Sub123455',
          semester: 2,
          numberOfClasses: 24,
        },
      ],
      [
        { name: 'Carne', id: 2 },
        { name: 'Peixe', id: 8 },
        { name: 'Conservas', id: 3 },
      ]
    ),
  ];
  constructor() {}

  getProfessors() {
    return this.professors;
  }

  /*
  código para quando for utilizar o BD

  async getProfessors(): Observable<string[]> {
    const response = new Observable();
    this.professors;
  }*/

  getProfessor(ra: string) {
    return this.professors.find((prof) => {
      return prof.registerCode == ra;
    });
  }

  addProfessor(newProfessor: Professor) {
    this.professors.push(newProfessor);
    this.professorsChanged.next(this.professors.slice());
  }

  updateProfessor(ra: string, editedProfessor: Professor) {
    const index = this.professors.findIndex((prof) => {
      return ra === prof.registerCode;
    });
    this.professors[index] = editedProfessor;
    this.professorsChanged.next(this.professors.slice());
  }

  deleteProfessor(ra: string) {
    console.log('deletando professor com id: ', ra);

    this.professors = this.professors.filter((i)=>{ return i.registerCode !== ra});
    return this.professors;
  }
}
