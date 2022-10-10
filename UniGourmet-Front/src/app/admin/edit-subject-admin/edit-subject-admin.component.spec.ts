import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubjectAdminComponent } from './edit-subject-admin.component';

describe('EditSubjectAdminComponent', () => {
  let component: EditSubjectAdminComponent;
  let fixture: ComponentFixture<EditSubjectAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubjectAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubjectAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
