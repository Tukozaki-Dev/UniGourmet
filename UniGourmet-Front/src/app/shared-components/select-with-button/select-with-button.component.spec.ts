import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWithButtonComponent } from './select-with-button.component';

describe('SelectWithButtonComponent', () => {
  let component: SelectWithButtonComponent;
  let fixture: ComponentFixture<SelectWithButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectWithButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
