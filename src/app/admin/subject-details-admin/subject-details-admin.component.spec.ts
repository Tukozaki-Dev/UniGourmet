import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDetailsAdminComponent } from './subject-details-admin.component';

describe('SubjectDetailsAdminComponent', () => {
  let component: SubjectDetailsAdminComponent;
  let fixture: ComponentFixture<SubjectDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectDetailsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
