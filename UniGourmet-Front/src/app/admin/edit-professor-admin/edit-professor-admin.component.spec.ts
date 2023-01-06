import { ComponentFixture,TestBed, waitForAsync } from '@angular/core/testing';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { AdminModule } from '../admin.module';
import { EditProfessorAdminComponent } from './edit-professor-admin.component';
import { AppModule } from 'src/app/app.module';

fdescribe('EditProfessorAdminComponent', () => {

  let fixture: ComponentFixture<EditProfessorAdminComponent>;
  let component:EditProfessorAdminComponent;

   beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AdminModule, AppModule],
      declarations: [EditProfessorAdminComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(EditProfessorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the Edit Professor Admin Component', () => {
    expect(component).toBeTruthy();
  });

  it("should call onUpdate()", () => {

    const onUpdateSpy = spyOn(component, "onUpdate");

    component.onUpdate();

    expect(onUpdateSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onAddProfessor()", () => {

    const onAddProfessorSpy = spyOn(component, "onAddProfessor");

    component.onAddProfessor();

    expect(onAddProfessorSpy).toHaveBeenCalledTimes(1);

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

  it("should call removeSubject()", () => {

    const removeSubjectSpy = spyOn(component, "removeSubject");

    component.removeSubject("mySubject");

    expect(removeSubjectSpy).toHaveBeenCalledTimes(1);

  });

  it("should call selectedSubject()", () => {

    const selectedSubjectSpy = spyOn(component, "selectedSubject");
    const event = new MatAutocompleteSelectedEvent(null, null);

    component.selectedSubject(event);

    expect(selectedSubjectSpy).toHaveBeenCalledTimes(1);

  });

  it("should call removeSpecialty()", () => {

    const removeSpecialtySpy = spyOn(component, "removeSpecialty");

    component.removeSpecialty("mySpecialty");

    expect(removeSpecialtySpy).toHaveBeenCalledTimes(1);

  });

  it("should call selectedSpecialty()", () => {

    const selectedSpecialtySpy = spyOn(component, "selectedSpecialty");
    const event = new MatAutocompleteSelectedEvent(null, null);

    component.selectedSpecialty(event);

    expect(selectedSpecialtySpy).toHaveBeenCalledTimes(1);

  });
});
