import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAdminComponent } from './subject-admin.component';

describe('SubjectAdminComponent', () => {
  let component: SubjectAdminComponent;
  let fixture: ComponentFixture<SubjectAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
