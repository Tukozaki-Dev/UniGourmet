import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDetailsAdminComponent } from './ingredient-details-admin.component';

describe('IngredientDetailsAdminComponent', () => {
  let component: IngredientDetailsAdminComponent;
  let fixture: ComponentFixture<IngredientDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientDetailsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
