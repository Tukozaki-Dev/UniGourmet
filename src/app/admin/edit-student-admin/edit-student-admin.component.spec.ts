import { ComponentFixture,TestBed, waitForAsync } from '@angular/core/testing';
import { AdminModule } from '../admin.module';
import { EditStudentAdminComponent } from './edit-student-admin.component';
import { AppModule } from 'src/app/app.module';
import { DebugElement } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';

fdescribe('EditStudentAdminComponent', () => {

  let fixture: ComponentFixture<EditStudentAdminComponent>;
  let component:EditStudentAdminComponent;
  let el: DebugElement;
  let studentForm: FormGroup;

   beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AdminModule, AppModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
      declarations: [EditStudentAdminComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(EditStudentAdminComponent);
    component = fixture.componentInstance;
    studentForm = component.studentForm;
    el = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create the Edit Student Admin Component', () => {

    expect(component).toBeTruthy();

  });

  it('Should display a message in "Edit mode"', () => {

    component.editMode = true;

    component.editStudent = 'Edite as informações do aluno abaixo.';

    fixture.detectChanges();

    const compiled = el.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('Edite as informações do aluno abaixo.');

  });

  it('Should display a message in "Add mode"', () => {

    component.editMode = false;

    component.addStudent = 'Você está no modo cadastro de aluno, preencha todos os dados abaixo corretamente.';

    fixture.detectChanges();

    const compiled = el.nativeElement;

    expect(compiled.querySelector('p').textContent).
    toContain('Você está no modo cadastro de aluno, preencha todos os dados abaixo corretamente.');

  });

  it('should inicialize the form empty', () => {

    expect(component.studentForm).toBeTruthy();

  });

  it('form should be invalid when empty', () => {

    expect(studentForm.valid).toBeFalsy();

  });

  it('submit button should be disabled when form is invalid', () => {

    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));

    expect(submitButton.nativeElement.disabled).toBeTruthy();

  });

  it('submit form should be success', () => {

    studentForm.controls['imagePath'].setValue('../../assets/img/LogoQuadrado.png');

    studentForm.controls['name'].setValue('Graziely Tukozaki');

    studentForm.controls['email'].setValue('email@email.com');

    studentForm.controls['registerCode'].setValue('RA123456');

    studentForm.controls['semester'].setValue(4);

    studentForm.controls['studentClass'].setValue('Turma abc');

    expect(component.studentForm.valid).toBeTruthy();

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

  it("should call onAddStudent()", () => {

    const onAddStudentSpy = spyOn(component, "onAddStudent");

    component.onAddStudent();

    expect(onAddStudentSpy).toHaveBeenCalledTimes(1);

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

});
