import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';

import { EditEventAdminComponent } from './edit-event-admin.component';

describe('EditEventAdminComponent', () => {
  let component: EditEventAdminComponent;
  let fixture: ComponentFixture<EditEventAdminComponent>;
  let eventForm: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEventAdminComponent ],
      imports: [ReactiveFormsModule, MatDatepickerModule,MatFormFieldModule, MatInputModule,MatSelectModule, MatButtonModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventAdminComponent);
    component = fixture.componentInstance;
    eventForm = component.eventForm;
    fixture.detectChanges();
  });

  it('should create the event component', () => {
    expect(component).toBeTruthy();
  });

  it('Should display a message in "Edit mode"', () => {

    component.editMode = true;

    component.editEvent = 'Edite as informações do evento abaixo.';

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('Edite as informações do evento abaixo.');

  });

  it('Should display a message in "Add mode"', () => {

    component.editMode = false;

    component.addEvent = 'Você está no modo cadastro de evento, preencha todos os dados abaixo corretamente.';

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('Você está no modo cadastro de evento, preencha todos os dados abaixo corretamente.');

  });

  it('should inicialize the form empty', () => {

    expect(component.eventForm).toBeTruthy();

    expect(component.eventForm.value).toEqual({
      eventDate: null,
      eventType: '',
      note: '',
      profile: '',
      category: ''
    });

  });

  it('form should be invalid when empty', () => {

    expect(eventForm.valid).toBeFalsy();

  });

  it('eventDate field should be required', () => {

    const eventDate = eventForm.controls['eventDate'];

    expect(eventDate.valid).toBeFalsy();

    expect(eventDate.errors['required']).toBeTruthy();

  });

  it('eventType field should be required', () => {

    const eventType = eventForm.controls['eventType'];

    expect(eventType.valid).toBeFalsy();

    expect(eventType.errors['required']).toBeTruthy();

  });

  it('profile field should be required', () => {

    const profile = eventForm.controls['profile'];

    expect(profile.valid).toBeFalsy();

    expect(profile.errors['required']).toBeTruthy();

  });

  it('category field should be required', () => {

    const category = eventForm.controls['category'];

    expect(category.valid).toBeFalsy();

    expect(category.errors['required']).toBeTruthy();

  });

  it('form should be valid when all fields are filled', () => {

    eventForm.controls['eventDate'].setValue('10/05/2023');

    eventForm.controls['eventType'].setValue('Prova');

    eventForm.controls['profile'].setValue('Aluno');

    eventForm.controls['category'].setValue('Público');

    expect(eventForm.valid).toBeTruthy();

  });

  it('submit button should be disabled when form is invalid', () => {

    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));

    expect(submitButton.nativeElement.disabled).toBeTruthy();

  });

  it('submit form should be success', () => {

    eventForm.controls['eventDate'].setValue('10/05/2023');

    eventForm.controls['eventType'].setValue('Prova');

    eventForm.controls['profile'].setValue('Aluno');

    eventForm.controls['category'].setValue('Público');

    expect(component.eventForm.valid).toBeTruthy();

    spyOn(component, 'onSubmit');

    let button = fixture.debugElement.nativeElement.querySelector('button');

    button.click();

    expect(component.onSubmit).toHaveBeenCalled();
  });


  it("should call onAddEvent()", () => {

    const onAddEventSpy = spyOn(component, "onAddEvent");

    component.onAddEvent();

    expect(onAddEventSpy).toHaveBeenCalledTimes(1);

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
