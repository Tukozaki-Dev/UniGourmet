import { EditIngredientAdminComponent } from './admin/edit-ingredient-admin/edit-ingredient-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassAdminComponent } from './admin/class-admin/class-admin.component';
import { EditClassAdminComponent } from './admin/edit-class-admin/edit-class-admin.component';
import { EditEventAdminComponent } from './admin/edit-event-admin/edit-event-admin.component';
import { EditProfessorAdminComponent } from './admin/edit-professor-admin/edit-professor-admin.component';
import { EditRecipeAdminComponent } from './admin/edit-recipe-admin/edit-recipe-admin.component';
import { EditStudentAdminComponent } from './admin/edit-student-admin/edit-student-admin.component';
import { EditSubjectAdminComponent } from './admin/edit-subject-admin/edit-subject-admin.component';
import { EventAdminComponent } from './admin/event-admin/event-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { IngredientAdminComponent } from './admin/ingredient-admin/ingredient-admin.component';
import { ProfessorAdminComponent } from './admin/professor-admin/professor-admin.component';
import { RecipeAdminComponent } from './admin/recipe-admin/recipe-admin.component';
import { StudentAdminComponent } from './admin/student-admin/student-admin.component';
import { SubjectAdminComponent } from './admin/subject-admin/subject-admin.component';

const appRoutes: Routes = [
  { path: '', component: HomeAdminComponent },
  { path: 'professor/cadastro', component: EditProfessorAdminComponent },
  { path: 'professor/:ra', component: EditProfessorAdminComponent },
  { path: 'professores', component: ProfessorAdminComponent },
  { path: 'aluno/cadastro', component: EditStudentAdminComponent },
  { path: 'aluno/:ra', component: EditStudentAdminComponent },
  { path: 'alunos', component: StudentAdminComponent },
  { path: 'materia/cadastro', component: EditSubjectAdminComponent },
  { path: 'materia/:id', component: EditSubjectAdminComponent },
  { path: 'materias', component: SubjectAdminComponent },
  { path: 'turma/cadastro', component: EditClassAdminComponent },
  { path: 'turma/:id', component: EditClassAdminComponent },
  { path: 'turmas', component: ClassAdminComponent },
  { path: 'receita/cadastro', component: EditRecipeAdminComponent },
  { path: 'receita/:id', component: EditRecipeAdminComponent },
  { path: 'receitas', component: RecipeAdminComponent },
  { path: 'ingrediente/cadastro', component: EditIngredientAdminComponent },
  { path: 'ingrediente/:id', component: EditIngredientAdminComponent },
  { path: 'ingredientes', component: IngredientAdminComponent },
  { path: 'evento/cadastro', component: EditEventAdminComponent },
  { path: 'evento/:id', component: EditEventAdminComponent },
  { path: 'eventos', component: EventAdminComponent },
  { path: '**', component: HomeAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
