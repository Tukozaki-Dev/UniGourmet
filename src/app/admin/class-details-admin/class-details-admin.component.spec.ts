import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDetailsAdminComponent } from './class-details-admin.component';

describe('ClassDetailsAdminComponent', () => {
  let component: ClassDetailsAdminComponent;
  let fixture: ComponentFixture<ClassDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassDetailsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
