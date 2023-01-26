import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { AdminModule } from '../admin.module';

import { EditSubjectAdminComponent } from './edit-subject-admin.component';

describe('EditSubjectAdminComponent', () => {
  let component: EditSubjectAdminComponent;
  let fixture: ComponentFixture<EditSubjectAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminModule, AppModule],
      declarations: [ EditSubjectAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubjectAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Edit Subject Admin Component', () => {
    expect(component).toBeTruthy();
  });

  it("should call onAddDiscipline()", () => {

    const onAddDisciplineSpy = spyOn(component, "onAddDiscipline");

    component.onAddDiscipline();

    expect(onAddDisciplineSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onDeleteDiscipline()", () => {

    const onDeleteDisciplineSpy = spyOn(component, "onDeleteDiscipline");

    component.onDeleteDiscipline(1);

    expect(onDeleteDisciplineSpy).toHaveBeenCalledTimes(1);

  });


  it("should call onUpdate()", () => {

    const onUpdateSpy = spyOn(component, "onUpdate");

    component.onUpdate();

    expect(onUpdateSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onSubmit()", () => {

    const onSubmitSpy = spyOn(component, "onSubmit");

    component.onSubmit();

    expect(onSubmitSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onCancel()", () => {

    const onCancelSpy = spyOn(component, "onCancel");

    component.onCancel();

    expect(onCancelSpy).toHaveBeenCalledTimes(1);

  });
});
