import { E } from '@angular/cdk/keycodes';
import { Discipline } from './discipline.model';
import { Specialty } from './specialty.model';

export class Professor {
  name: string;
  email: string;
  registerCode: string;
  imagePath?: string;
  subjects: Discipline[];
  specialties: Specialty[];

  constructor(
    name: string,
    email: string,
    registerCode: string,
    imagePath: string,
    subjects: Discipline[],
    specialties: Specialty[]
  ) {
    this.name = name;
    this.email = email;
    this.registerCode = registerCode;
    this.imagePath = imagePath;
    this.subjects = subjects;
    this.specialties = specialties;
  }
}
