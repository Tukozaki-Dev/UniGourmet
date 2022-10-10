import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassAdminComponent } from './edit-class-admin.component';

describe('EditClassAdminComponent', () => {
  let component: EditClassAdminComponent;
  let fixture: ComponentFixture<EditClassAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClassAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
