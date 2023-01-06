import { ComponentFixture,TestBed, waitForAsync } from '@angular/core/testing';
import { AdminModule } from '../admin.module';
import { EditStudentAdminComponent } from './edit-student-admin.component';
import { AppModule } from 'src/app/app.module';

fdescribe('EditStudentAdminComponent', () => {

  let fixture: ComponentFixture<EditStudentAdminComponent>;
  let component:EditStudentAdminComponent;

   beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AdminModule, AppModule],
      declarations: [EditStudentAdminComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(EditStudentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the Edit Student Admin Component', () => {
    expect(component).toBeTruthy();
  });

  it("should call onUpdate()", () => {

    const onUpdateSpy = spyOn(component, "onUpdate");

    component.onUpdate();

    expect(onUpdateSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onAddStudent()", () => {

    const onAddStudentSpy = spyOn(component, "onAddStudent");

    component.onAddStudent();

    expect(onAddStudentSpy).toHaveBeenCalledTimes(1);

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
