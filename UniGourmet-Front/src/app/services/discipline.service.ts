import { Injectable } from '@angular/core';
import { observable, Observable, of, Subject } from 'rxjs';
import { Discipline } from '../shared-components/models/discipline.model';
import { DisciplineWithClasses, Lesson, RecipeLesson } from '../shared-components/models/disciplineWithClasses.model';

@Injectable({
  providedIn: 'root',
})
export class DisciplineService {
  disciplineWithClassesChanged = new Subject<DisciplineWithClasses[]>();

  disciplines: Discipline[] = [
    new Discipline('Buffet e Restauração', 'Sub123450', 4, 16),
    new Discipline('Confeitaria', 'Sub123451', 2, 32),
    new Discipline('Cozinha Asiática', 'Sub123452', 2, 16),
    new Discipline('Cozinha das Américas', 'Sub123453', 2, 16),
    new Discipline('Cozinha Francesa', 'Sub123454', 2, 32),
    new Discipline('Cozinha Italiana', 'Sub123455', 2, 16),
    new Discipline('Cozinha Mediterrânea', 'Sub123456', 2, 32),
    new Discipline('Cozinha Regional Brasileira', 'Sub123457', 2, 32),
    new Discipline('Panificação', 'Sub123458', 2, 16),
    new Discipline('Princípios e Fundamentos da Cozinha', 'Sub123459', 2, 32),
    new Discipline('Técnicas Clássicas', 'Sub123410', 2, 16),
  ];

  firstLesson:RecipeLesson[] = [
    {recipeName: 'Mjadra', recipeId: 'CM0032'},
    {recipeName: 'Tajine', recipeId: 'CM0033'},
  ];

  secondLesson:RecipeLesson[] = [
    {recipeName: 'Antepasto de berinjela', recipeId: 'CM0034'},
    {recipeName: 'Sanduíche mediterrâneo', recipeId: 'CM0035'},
  ];

  thirdLesson:RecipeLesson[] = [
    {recipeName: 'Salada grega', recipeId: 'CM0036'},
    {recipeName: 'Babaganoush', recipeId: 'CM0037'},
  ];
  lessonOne:Lesson = {
    recipeLessons:this.firstLesson,
  }

  lessonTwo:Lesson = {
    recipeLessons:this.secondLesson,
  }

  lessonThree:Lesson = {
    recipeLessons:this.thirdLesson,
  }

  disciplineWithClasses: DisciplineWithClasses[] = [
    new DisciplineWithClasses (
      new Discipline('Buffet e Restauração', 'Sub123450', 4, 16),
      [this.lessonOne, this.lessonTwo, this.lessonThree],
    ),
    new DisciplineWithClasses (
      new Discipline('Confeitaria', 'Sub123451', 2, 32),
      [this.lessonOne, this.lessonTwo, this.lessonThree],
    ),
    new DisciplineWithClasses (
      new Discipline('Cozinha Asiática', 'Sub123452', 2, 16),
      [this.lessonOne, this.lessonTwo, this.lessonThree],
    ),
    new DisciplineWithClasses (
      new Discipline('Cozinha das Américas', 'Sub123453', 2, 16),
      [this.lessonOne, this.lessonTwo, this.lessonThree],
    ),
    new DisciplineWithClasses (
      new Discipline('Cozinha Francesa', 'Sub123454', 2, 32),
      [this.lessonOne, this.lessonTwo, this.lessonThree],
    ),
    new DisciplineWithClasses (
      new Discipline('Cozinha Italiana', 'Sub123455', 2, 16),
      [this.lessonOne, this.lessonTwo, this.lessonThree],
    ),
    new DisciplineWithClasses (
      new Discipline ('Cozinha Mediterrânea', 'Sub123456', 2, 16),
      [this.lessonOne, this.lessonTwo, this.lessonThree],
    ),
    new DisciplineWithClasses (
      new Discipline('Cozinha Regional Brasileira', 'Sub123457', 2, 32),
      [this.lessonOne, this.lessonTwo, this.lessonThree],
    ),
    new DisciplineWithClasses (
      new Discipline('Panificação', 'Sub123458', 2, 16),
      [this.lessonOne, this.lessonTwo, this.lessonThree],
    ),
    new DisciplineWithClasses (
      new Discipline('Princípios e Fundamentos da Cozinha', 'Sub123459', 2, 32),
      [this.lessonOne, this.lessonTwo, this.lessonThree],
    ),new DisciplineWithClasses (
      new Discipline('Técnicas Clássicas', 'Sub123410', 2, 16),
      [this.lessonOne, this.lessonTwo, this.lessonThree],
    )
  ]

  private semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  private numberOfClasses = [16, 32, 48];


  constructor() {}

  getNumberOfClasses(){
    return this.numberOfClasses;
  }

  getSemesters(){
    return this.semesters;
  }

  //get all displines without classes
  getDisciplines(){
    return this.disciplines;
  }

  getDisciplinesNames() {
    return this.disciplines.map(disciplines => disciplines.name)
  }

  //get all displines with classes
  getDisciplinesWithClasses(){
    return this.disciplineWithClasses;
  }

  /*
  código para quando for utilizar o BD

  async getStudents(): Observable<string[]> {
    const response = new Observable();
    this.disciplines;
  }*/

  //get one displines without classes
  getDiscipline(ra: string) {
    return this.disciplines.find((disciplines) => {
      return disciplines.registerCode == ra;
    });
  }

  //get one displine with classes
  getDisciplineWithClasses(ra: string) {
    return this.disciplineWithClasses.find((disciplineWithClasses) => {
      return disciplineWithClasses.subject.registerCode == ra;
    });
  }

  addDisciplineWithClasses(newDiscipline: DisciplineWithClasses) {
    this.disciplineWithClasses.push(newDiscipline);
    this.disciplineWithClassesChanged.next(this.disciplineWithClasses.slice());
  }

  updateDisciplineWithClasses(ra: string, editedDispline: DisciplineWithClasses) {
    const index = this.disciplineWithClasses.findIndex((discipline) => {
      return ra === discipline.subject.registerCode;
    });
    this.disciplineWithClasses[index] = editedDispline;
    this.disciplineWithClassesChanged.next(this.disciplineWithClasses.slice());
  }

  updateLesson(id: number, lesson: RecipeLesson[], disciplineId: string):Observable<Lesson[]>{
    const index = this.disciplineWithClasses.findIndex((discipline) => {
      return disciplineId === discipline.subject.registerCode;
    });
    this.disciplineWithClasses[index].lessons[id].recipeLessons = lesson;
    this.disciplineWithClassesChanged.next(this.disciplineWithClasses.slice());

    return of(this.disciplineWithClasses[index].lessons);
  }

  deleteDiscipline(ra: string) {
    this.disciplines = this.disciplines.filter((i)=>{ return i.registerCode !== ra});
    return this.disciplines;
  }
}
