import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudantAdminComponent } from './edit-studant-admin.component';

describe('EditStudantAdminComponent', () => {
  let component: EditStudantAdminComponent;
  let fixture: ComponentFixture<EditStudantAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudantAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudantAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
