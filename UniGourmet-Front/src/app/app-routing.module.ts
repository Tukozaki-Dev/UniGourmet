import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassAdminComponent } from './admin/class-admin/class-admin.component';
import { EventAdminComponent } from './admin/event-admin/event-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { IngredientAdminComponent } from './admin/ingredient-admin/ingredient-admin.component';
import { ProfessorAdminComponent } from './admin/professor-admin/professor-admin.component';
import { RecipeAdminComponent } from './admin/recipe-admin/recipe-admin.component';
import { StudentAdminComponent } from './admin/student-admin/student-admin.component';
import { SubjectAdminComponent } from './admin/subject-admin/subject-admin.component';

const appRoutes: Routes = [
  { path: '', component: HomeAdminComponent },
  { path: 'professors', component: ProfessorAdminComponent },
  { path: 'students', component: StudentAdminComponent },
  { path: 'subjects', component: SubjectAdminComponent },
  { path: 'classes', component: ClassAdminComponent },
  { path: 'recipes', component: RecipeAdminComponent },
  { path: 'ingredients', component: IngredientAdminComponent },
  { path: 'events', component: EventAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
