import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWithChipComponent } from './dialog-with-chip.component';

describe('DialogWithChipComponent', () => {
  let component: DialogWithChipComponent;
  let fixture: ComponentFixture<DialogWithChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogWithChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogWithChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
