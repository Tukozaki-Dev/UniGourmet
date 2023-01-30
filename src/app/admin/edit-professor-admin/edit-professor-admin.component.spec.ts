import { ComponentFixture,TestBed, waitForAsync } from '@angular/core/testing';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { AdminModule } from '../admin.module';
import { EditProfessorAdminComponent } from './edit-professor-admin.component';
import { AppModule } from 'src/app/app.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FileUploadComponent } from 'src/app/shared-components/file-upload/file-upload.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('EditProfessorAdminComponent', () => {

  let fixture: ComponentFixture<EditProfessorAdminComponent>;
  let component:EditProfessorAdminComponent;
  let el: DebugElement;
  let professorForm: FormGroup;

   beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AdminModule, AppModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
      declarations: [EditProfessorAdminComponent, FileUploadComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(EditProfessorAdminComponent);
    component = fixture.componentInstance;
    professorForm = component.professorForm;
    el = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create the Edit Professor Admin Component', () => {

    expect(component).toBeTruthy();

  });

  it('Should display a message in "Edit mode"', () => {

    component.editMode = true;

    component.editProfessor = 'Edite as informações do professor abaixo.';

    fixture.detectChanges();

    const compiled = el.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('Edite as informações do professor abaixo.');

  });

  it('Should display a message in "Add mode"', () => {

    component.editMode = false;

    component.addProfessor = 'Você está no modo cadastro de professor, preencha todos os dados abaixo corretamente.';

    fixture.detectChanges();

    const compiled = el.nativeElement;

    expect(compiled.querySelector('p').textContent).
    toContain('Você está no modo cadastro de professor, preencha todos os dados abaixo corretamente.');

  });

  it('should inicialize the form empty', () => {

    expect(component.professorForm).toBeTruthy();

  });

  it('form should be invalid when empty', () => {

    expect(professorForm.valid).toBeFalsy();

  });

  it('submit button should be disabled when form is invalid', () => {

    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));

    expect(submitButton.nativeElement.disabled).toBeTruthy();

  });

  it('submit form should be success', () => {

    professorForm.controls['imagePath'].setValue('../../assets/img/LogoQuadrado.png');

    professorForm.controls['name'].setValue('Graziely Tukozaki');

    professorForm.controls['email'].setValue('email@email.com');

    professorForm.controls['registerCode'].setValue('RA123456');

    professorForm.controls['subjects'].setValue('Cozinha das Américas');

    professorForm.controls['specialties'].setValue('Carne');

    expect(component.professorForm.valid).toBeTruthy();

    spyOn(component, 'onSubmit');

    let button = fixture.debugElement.nativeElement.querySelector('button');

    button.click();

    expect(component.onSubmit).toHaveBeenCalled();

  });

  it("should call onUpdate()", () => {

    const onUpdateSpy = spyOn(component, "onUpdate");

    component.onUpdate();

    expect(onUpdateSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onAddProfessor()", () => {

    const onAddProfessorSpy = spyOn(component, "onAddProfessor");

    component.onAddProfessor();

    expect(onAddProfessorSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onSubmit()", () => {

    const onSubmitSpy = spyOn(component, "onSubmit");

    component.onSubmit();

    expect(onSubmitSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onCancel()", () => {

    const onCancelSpy = spyOn(component, "onCancel");

    component.onCancel();

    expect(onCancelSpy).toHaveBeenCalledTimes(1);

  });

  it("should call removeSubject()", () => {

    const removeSubjectSpy = spyOn(component, "removeSubject");

    component.removeSubject("mySubject");

    expect(removeSubjectSpy).toHaveBeenCalledTimes(1);

  });

  it("should call selectedSubject()", () => {

    const selectedSubjectSpy = spyOn(component, "selectedSubject");
    const event = new MatAutocompleteSelectedEvent(null, null);

    component.selectedSubject(event);

    expect(selectedSubjectSpy).toHaveBeenCalledTimes(1);

  });

  it("should call removeSpecialty()", () => {

    const removeSpecialtySpy = spyOn(component, "removeSpecialty");

    component.removeSpecialty("mySpecialty");

    expect(removeSpecialtySpy).toHaveBeenCalledTimes(1);

  });

  it("should call selectedSpecialty()", () => {

    const selectedSpecialtySpy = spyOn(component, "selectedSpecialty");
    const event = new MatAutocompleteSelectedEvent(null, null);

    component.selectedSpecialty(event);

    expect(selectedSpecialtySpy).toHaveBeenCalledTimes(1);

  });
});
