import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorDetailsAdminComponent } from './professor-details-admin.component';

describe('ProfessorDetailsAdminComponent', () => {
  let component: ProfessorDetailsAdminComponent;
  let fixture: ComponentFixture<ProfessorDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorDetailsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
