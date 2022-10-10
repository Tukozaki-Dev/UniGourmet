import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIngredientAdminComponent } from './edit-ingredient-admin.component';

describe('EditIngredientAdminComponent', () => {
  let component: EditIngredientAdminComponent;
  let fixture: ComponentFixture<EditIngredientAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIngredientAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIngredientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
