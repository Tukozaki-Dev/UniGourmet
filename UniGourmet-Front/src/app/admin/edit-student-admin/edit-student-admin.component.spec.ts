import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentAdminComponent } from './edit-student-admin.component';

describe('EditStudentAdminComponent', () => {
  let component: EditStudentAdminComponent;
  let fixture: ComponentFixture<EditStudentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudentAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
