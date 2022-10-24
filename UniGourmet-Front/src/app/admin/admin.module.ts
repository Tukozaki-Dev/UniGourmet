import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { EditRecipeAdminComponent } from './edit-recipe-admin/edit-recipe-admin.component';
import { RecipeAdminComponent } from './recipe-admin/recipe-admin.component';
import { EditStudentAdminComponent } from './edit-student-admin/edit-student-admin.component';
import { StudentAdminComponent } from './student-admin/student-admin.component';
import { EditSubjectAdminComponent } from './edit-subject-admin/edit-subject-admin.component';
import { SubjectAdminComponent } from './subject-admin/subject-admin.component';
import { EditClassAdminComponent } from './edit-class-admin/edit-class-admin.component';
import { ClassAdminComponent } from './class-admin/class-admin.component';
import { EditEventAdminComponent } from './edit-event-admin/edit-event-admin.component';
import { EventAdminComponent } from './event-admin/event-admin.component';
import { EditIngredientAdminComponent } from './edit-ingredient-admin/edit-ingredient-admin.component';
import { IngredientAdminComponent } from './ingredient-admin/ingredient-admin.component';
import { EditProfessorAdminComponent } from './edit-professor-admin/edit-professor-admin.component';
import { ProfessorAdminComponent } from './professor-admin/professor-admin.component';
import { AdminComponent } from './admin.component';
import { HeaderAdmComponent } from '../shared-components/header-adm/header-adm.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadComponent } from '../shared-components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    HomeAdminComponent,
    EditRecipeAdminComponent,
    RecipeAdminComponent,
    EditStudentAdminComponent,
    StudentAdminComponent,
    SubjectAdminComponent,
    EditSubjectAdminComponent,
    EditClassAdminComponent,
    ClassAdminComponent,
    EditEventAdminComponent,
    EventAdminComponent,
    EditIngredientAdminComponent,
    IngredientAdminComponent,
    EditProfessorAdminComponent,
    ProfessorAdminComponent,
    AdminComponent,
    HeaderAdmComponent,
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AngularMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [AdminComponent],
})
export class AdminModule {}
