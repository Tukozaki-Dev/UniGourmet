import { DialogComponent } from 'src/app/shared-components/dialog/dialog.component';
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
import { ButtonComponent } from '../shared-components/button/button.component';
import { IconButtonComponent } from '../shared-components/icon-button/icon-button.component';
import { TableExpandableRowsComponent } from '../shared-components/table-expandable-rows/table-expandable-rows.component';
import { TableFilteringComponent } from '../shared-components/table-filtering/table-filtering.component';
import { TableHeaderComponent } from '../shared-components/table-header/table-header.component';
import { CdkTableModule } from '@angular/cdk/table';
import { StudentDetailsAdminComponent } from './student-details-admin/student-details-admin.component';
import { ProfessorDetailsAdminComponent } from './professor-details-admin/professor-details-admin.component';
import { IngredientDetailsAdminComponent } from './ingredient-details-admin/ingredient-details-admin.component';
import { RecipeDetailsAdminComponent } from './recipe-details-admin/recipe-details-admin.component';
import { ClassDetailsAdminComponent } from './class-details-admin/class-details-admin.component';
import { SubjectDetailsAdminComponent } from './subject-details-admin/subject-details-admin.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
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
    ButtonComponent,
    IconButtonComponent,
    TableExpandableRowsComponent,
    TableFilteringComponent,
    TableHeaderComponent,
    DialogComponent,
    StudentDetailsAdminComponent,
    ProfessorDetailsAdminComponent,
    IngredientDetailsAdminComponent,
    RecipeDetailsAdminComponent,
    ClassDetailsAdminComponent,
    SubjectDetailsAdminComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AngularMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CdkTableModule
  ],
  exports: [AdminComponent],
})
export class AdminModule {}
