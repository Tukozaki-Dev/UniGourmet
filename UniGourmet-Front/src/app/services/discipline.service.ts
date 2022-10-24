import { Injectable } from '@angular/core';
import { Discipline } from '../shared-components/models/discipline.model';

@Injectable({
  providedIn: 'root',
})
export class DisciplineService {
  discipline: Discipline[] = [
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
}
