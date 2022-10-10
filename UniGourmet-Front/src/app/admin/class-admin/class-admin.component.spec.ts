import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAdminComponent } from './class-admin.component';

describe('ClassAdminComponent', () => {
  let component: ClassAdminComponent;
  let fixture: ComponentFixture<ClassAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
