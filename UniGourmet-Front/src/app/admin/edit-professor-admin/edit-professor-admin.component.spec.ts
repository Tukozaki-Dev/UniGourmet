import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfessorAdminComponent } from './edit-professor-admin.component';

describe('EditProfessorAdminComponent', () => {
  let component: EditProfessorAdminComponent;
  let fixture: ComponentFixture<EditProfessorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfessorAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfessorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
