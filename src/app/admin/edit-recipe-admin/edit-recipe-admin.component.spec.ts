import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipeAdminComponent } from './edit-recipe-admin.component';

describe('EditRecipeAdminComponent', () => {
  let component: EditRecipeAdminComponent;
  let fixture: ComponentFixture<EditRecipeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecipeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
