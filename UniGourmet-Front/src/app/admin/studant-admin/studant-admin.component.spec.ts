import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudantAdminComponent } from './studant-admin.component';

describe('StudantAdminComponent', () => {
  let component: StudantAdminComponent;
  let fixture: ComponentFixture<StudantAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudantAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudantAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
