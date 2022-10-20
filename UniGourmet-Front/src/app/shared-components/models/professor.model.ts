import { ProfessorSubject } from './professor-subject.model';
import { Specialty } from './specialty.model';

export class Professor {
  name: string;
  registerCode: string;
  imagePath: string;
  subjects: ProfessorSubject[];
  specialities: Specialty[];

  constructor(
    name: string,
    registerCode: string,
    imagePath: string,
    subjects: ProfessorSubject[],
    specialities: Specialty[]
  ) {
    this.name = name;
    this.registerCode = registerCode;
    this.imagePath = imagePath;
    this.subjects = subjects;
    this.specialities = specialities;
  }
}
