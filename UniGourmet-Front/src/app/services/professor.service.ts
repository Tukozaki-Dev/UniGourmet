import { Injectable } from '@angular/core';
import { Professor } from '../shared-components/models/professor.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  startedEditing = new Subject<number>();
  professorsChanged = new Subject<Professor[]>();

  private professors: Professor[] = [
    new Professor(
      'Graziely Tukozaki',
      'RA123456',
      'URL',
      [
        {
          name: 'Cozinha Clássica',
          registerCode: 'Sub1828828',
          semester: 4,
          numberOfClasses: 20,
        },
        {
          name: 'Cozinha Italiana',
          registerCode: 'Sub182833',
          semester: 2,
          numberOfClasses: 24,
        },
      ],
      [
        { specialtyName: 'Carne' },
        { specialtyName: 'Peixes' },
        { specialtyName: 'Massa' },
      ]
    ),
    new Professor(
      'Izabela Soares',
      'URL',
      'RA129956',
      [
        {
          name: 'Cozinha Francesa',
          registerCode: 'Sub1828828',
          semester: 4,
          numberOfClasses: 20,
        },
        {
          name: 'Cozinha Arabe',
          registerCode: 'Sub182833',
          semester: 2,
          numberOfClasses: 24,
        },
      ],
      [
        { specialtyName: 'Carne' },
        { specialtyName: 'Peixes' },
        { specialtyName: 'Aves' },
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

  addProfessor(professor: Professor) {
    this.professors.push(professor);
    this.professorsChanged.next(this.professors.slice());
  }

  updateProfessor(index: number, newProfessor: Professor) {
    this.professors[index] = newProfessor;
    this.professorsChanged.next(this.professors.slice());
  }

  deleteProfessor(index: number) {
    this.professors.splice(index, 1);
    this.professorsChanged.next(this.professors.slice());
  }
}
