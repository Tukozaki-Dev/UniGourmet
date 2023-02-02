import { ComponentFixture,TestBed, waitForAsync } from '@angular/core/testing';
import { AdminModule } from '../admin.module';
import { EditClassAdminComponent } from './edit-class-admin.component';
import { AppModule } from 'src/app/app.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('EditClassAdminComponent', () => {

  let fixture: ComponentFixture<EditClassAdminComponent>;
  let component:EditClassAdminComponent;

   beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AdminModule, AppModule, ReactiveFormsModule, MatFormFieldModule,MatInputModule,MatSelectModule,NoopAnimationsModule],
      declarations: [EditClassAdminComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(EditClassAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the Edit Class Admin Component', () => {
    expect(component).toBeTruthy();
  });

  it('Should display a message in "Edit mode"', () => {

  component.editMode = true;

  component.editClass = 'Edite as informações da turma abaixo.';

  fixture.detectChanges();

  const compiled = fixture.debugElement.nativeElement;

  expect(compiled.querySelector('p').textContent).toContain('Edite as informações da turma abaixo.');

  });

  it('Should display a message in "Add mode"', () => {

  component.editMode = false;

  component.addClass = 'Você está no modo cadastro de turma, preencha todos os dados abaixo corretamente.';

  fixture.detectChanges();

  const compiled = fixture.debugElement.nativeElement;

  expect(compiled.querySelector('p').textContent).toContain('Você está no modo cadastro de turma, preencha todos os dados abaixo corretamente.');

  });

  it('should inicialize the form', () => {

    expect(component.classForm).toBeTruthy();

  });

  it('should add one class to the form', () => {
    const controlLength = component.disciplines.controls.length;
    component.onAddDiscipline();
    expect(component.disciplines.controls.length).toEqual(controlLength + 1);
  });

  it('should delete one class to the form', () => {
    component.onAddDiscipline();
    const controlLength = component.disciplines.controls.length;
    component.onDeleteDiscipline(0);
    expect(component.disciplines.controls.length).toEqual(controlLength - 1);
  });

  it("should call onAddDiscipline()", () => {

    const onAddDisciplineSpy = spyOn(component, "onAddDiscipline");

    component.onAddDiscipline();

    expect(onAddDisciplineSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onDeleteDiscipline()", () => {

    const onDeleteDisciplineSpy = spyOn(component, "onDeleteDiscipline");

    component.onDeleteDiscipline(1);

    expect(onDeleteDisciplineSpy).toHaveBeenCalledTimes(1);

  });


  it("should call onUpdate()", () => {

    const onUpdateSpy = spyOn(component, "onUpdate");

    component.onUpdate();

    expect(onUpdateSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onAddClass()", () => {

    const onAddClassSpy = spyOn(component, "onAddClass");

    component.onAddClass();

    expect(onAddClassSpy).toHaveBeenCalledTimes(1);

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
