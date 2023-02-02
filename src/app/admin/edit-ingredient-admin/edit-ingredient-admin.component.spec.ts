import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { Unity } from 'src/app/shared-components/models/ingredient.model';
import { AdminModule } from '../admin.module';

import { EditIngredientAdminComponent } from './edit-ingredient-admin.component';

describe('EditIngredientAdminComponent', () => {
  let component: EditIngredientAdminComponent;
  let fixture: ComponentFixture<EditIngredientAdminComponent>;
  let ingredientForm: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminModule, AppModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
      declarations: [ EditIngredientAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIngredientAdminComponent);
    component = fixture.componentInstance;
    ingredientForm = component.ingredientForm;
    fixture.detectChanges();
  });

  it('should create the Edit Ingredient Admin Component', () => {
    expect(component).toBeTruthy();
  });

  it('Should display a message in "Edit mode"', () => {

    component.editMode = true;

    component.editIngredient = 'Edite as informações do ingrediente abaixo.';

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('Edite as informações do ingrediente abaixo.');

  });

  it('Should display a message in "Add mode"', () => {

    component.editMode = false;

    component.addIngredient = 'Você está no modo cadastro de ingrediente, preencha todos os dados abaixo corretamente.';

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('Você está no modo cadastro de ingrediente, preencha todos os dados abaixo corretamente.');

  });

  it('should inicialize the form empty', () => {

    expect(component.ingredientForm).toBeTruthy();

  });

  it('form should be invalid when empty', () => {

    expect(ingredientForm.valid).toBeFalsy();

  });

  it('name field is required', () => {

    let name = component.ingredientForm.controls['name'];

    expect(name.valid).toBeFalsy();

    name.setValue("");

    expect(name.hasError('required')).toBeTruthy();

    name.setValue("Batata");

    expect(name.valid).toBeTruthy();
  });

  it('unity field is required', () => {

    let unity = component.ingredientForm.controls['unity'];
    expect(unity.valid).toBeFalsy();

    unity.setValue(null);
    expect(unity.hasError('required')).toBeTruthy();

    unity.setValue(Unity.dente);
    expect(unity.valid).toBeTruthy();

  });

  it('submit button should be disabled when form is invalid', () => {

    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));

    expect(submitButton.nativeElement.disabled).toBeTruthy();

  });

  it('submit form should be success', () => {

    let name = component.ingredientForm.controls['name'];
    let unity = component.ingredientForm.controls['unity'];
    name.setValue("Batata");
    unity.setValue(Unity.cabeça);

    expect(component.ingredientForm.valid).toBeTruthy();
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

  it("should call onAddIngredient()", () => {

    const onAddIngredientSpy = spyOn(component, "onAddIngredient");

    component.onAddIngredient();

    expect(onAddIngredientSpy).toHaveBeenCalledTimes(1);

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
