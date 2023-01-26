import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsAdminComponent } from './recipe-details-admin.component';

describe('RecipeDetailsAdminComponent', () => {
  let component: RecipeDetailsAdminComponent;
  let fixture: ComponentFixture<RecipeDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
