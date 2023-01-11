import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsAdminComponent } from './student-details-admin.component';

describe('StudentDetailsAdminComponent', () => {
  let component: StudentDetailsAdminComponent;
  let fixture: ComponentFixture<StudentDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
