import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { AdminModule } from '../admin.module';

import { RecipeAdminComponent } from './recipe-admin.component';

fdescribe('RecipeAdminComponent', () => {
  let component: RecipeAdminComponent;
  let fixture: ComponentFixture<RecipeAdminComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AdminModule, AppModule],
      declarations: [RecipeAdminComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(RecipeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create Recipe Admin Component', () => {
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

  it("should call onDeleteRecipe()", () => {

    const onDeleteRecipeSpy = spyOn(component, "onDeleteRecipe");

    component.onDeleteRecipe("id");

    expect(onDeleteRecipeSpy).toHaveBeenCalledTimes(1);

  });

});
