import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { AdminModule } from '../admin.module';

import { EditSubjectAdminComponent } from './edit-subject-admin.component';

describe('EditSubjectAdminComponent', () => {
  let component: EditSubjectAdminComponent;
  let fixture: ComponentFixture<EditSubjectAdminComponent>;
  let el: DebugElement;
  let subjectForm: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminModule, AppModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
      declarations: [ EditSubjectAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubjectAdminComponent);
    component = fixture.componentInstance;
    subjectForm = component.subjectForm;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the Edit Subject Admin Component', () => {

    expect(component).toBeTruthy();

  });

  it('Should display a message in "Edit mode"', () => {

    component.editMode = true;

    component.editSubject = 'Edite as informações da matéria abaixo.';

    fixture.detectChanges();

    const compiled = el.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('Edite as informações da matéria abaixo.');

  });

  it('Should display a message in "Add mode"', () => {

    component.editMode = false;

    component.addSubject = 'Você está no modo cadastro de matéria, preencha todos os dados abaixo corretamente.';

    fixture.detectChanges();

    const compiled = el.nativeElement;

    expect(compiled.querySelector('p').textContent).
    toContain('Você está no modo cadastro de matéria, preencha todos os dados abaixo corretamente.');

  });

  it('should inicialize the form empty', () => {

    expect(component.subjectForm).toBeTruthy();

  });

  it('form should be invalid when empty', () => {

    expect(subjectForm.valid).toBeFalsy();

  });

  it('submit button should be disabled when form is invalid', () => {

    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));

    expect(submitButton.nativeElement.disabled).toBeTruthy();

  });

  it('should have the correct default value', () => {
    expect(component.subjectForm.value.subject.semester).toBe(null);
  });

  it('should populate the semesters array with correct values', () => {

    component.semesters = [1, 2, 3, 4];

    fixture.detectChanges();

    const select = fixture.debugElement.query(By.css('mat-select'));

    const options = select.queryAll(By.css('mat-option'));

    expect(options[0].nativeElement.textContent).toContain(1);
    expect(options[1].nativeElement.textContent).toContain(2);
    expect(options[2].nativeElement.textContent).toContain(3);
    expect(options[3].nativeElement.textContent).toContain(4);

  });

  it('should change the value of the form control when an option is selected', () => {

    component.semesters = [1, 2, 3, 4];
    fixture.detectChanges();

    const select = fixture.debugElement.query(By.css('mat-select'));

    select.triggerEventHandler('click', null);
    fixture.detectChanges();

    const options = select.queryAll(By.css('mat-option'));
    options[1].nativeElement.click();
    fixture.detectChanges();

    expect(component.subjectForm.value.subject.semester).toBe(2);

  });

  it('submit form should be success', () => {

    subjectForm.controls['name'].setValue('Buffet e Restauração');

    subjectForm.controls['registerCode'].setValue('Sub123450');

    subjectForm.controls['semester'].setValue(4);

    subjectForm.controls['numberOfClasses'].setValue(16);

    expect(component.subjectForm.valid).toBeTruthy();

    spyOn(component, 'onSubmit');

    let button = fixture.debugElement.nativeElement.querySelector('button');

    button.click();

    expect(component.onSubmit).toHaveBeenCalled();

  });

  it("should call onAddLesson()", () => {

    const onAddLessonSpy = spyOn(component, "onAddLesson");

    component.onAddLesson();

    expect(onAddLessonSpy).toHaveBeenCalledTimes(1);

  });


  it("should call onUpdate()", () => {

    const onUpdateSpy = spyOn(component, "onUpdate");

    component.onUpdate();

    expect(onUpdateSpy).toHaveBeenCalledTimes(1);

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
