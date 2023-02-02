import { Injectable } from '@angular/core';
import { Specialty } from '../shared-components/models/specialty.model';

@Injectable({
  providedIn: 'root',
})
export class SpecialtyService {
  specialty: Specialty[] = [
    new Specialty('Assados', 1),
    new Specialty('Carne', 2),
    new Specialty('Conservas', 3),
    new Specialty('Confeitaria francesa', 4),
    new Specialty('Embutidos', 5),
    new Specialty('Fermentação natural', 6),
    new Specialty('Massa', 7),
    new Specialty('Peixe', 8),
    new Specialty('Viennoiserie', 9),
  ];
  constructor() {}
}
