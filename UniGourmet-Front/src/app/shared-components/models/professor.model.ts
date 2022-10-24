import { Discipline } from './discipline.model';
import { Specialty } from './specialty.model';

export class Professor {
  name: string;
  registerCode: string;
  imagePath: string;
  subjects: Discipline[];
  specialties: Specialty[];

  constructor(
    name: string,
    registerCode: string,
    imagePath: string,
    subjects: Discipline[],
    specialties: Specialty[]
  ) {
    this.name = name;
    this.registerCode = registerCode;
    this.imagePath = imagePath;
    this.subjects = subjects;
    this.specialties = specialties;
  }
}
