import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { AdminModule } from '../admin.module';

import { IngredientAdminComponent } from './ingredient-admin.component';

fdescribe('IngredientAdminComponent', () => {

  let fixture: ComponentFixture<IngredientAdminComponent>;
  let component: IngredientAdminComponent;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AdminModule, AppModule],
      declarations: [IngredientAdminComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(IngredientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the Ingredient Admin Component', () => {
    expect(component).toBeTruthy();
  });

  it("should call goToCreateNew()", () => {

    const goToCreateNewSpy = spyOn(component, "goToCreateNew");

    component.goToCreateNew();

    expect(goToCreateNewSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onClickEdit()", () => {

    const onClickEditSpy = spyOn(component, "onClickEdit");

    component.onClickEdit("id");

    expect(onClickEditSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onDeleteIngredient()", () => {

    const onDeleteIngredientSpy = spyOn(component, "onDeleteIngredient");

    component.onDeleteIngredient("id");

    expect(onDeleteIngredientSpy).toHaveBeenCalledTimes(1);

  });

});
