import { ComponentFixture,TestBed, waitForAsync } from '@angular/core/testing';
import { AdminModule } from '../admin.module';
import { EditClassAdminComponent } from './edit-class-admin.component';
import { AppModule } from 'src/app/app.module';

fdescribe('EditClassAdminComponent', () => {

  let fixture: ComponentFixture<EditClassAdminComponent>;
  let component:EditClassAdminComponent;

   beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AdminModule, AppModule],
      declarations: [EditClassAdminComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(EditClassAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the Edit Class Admin Component', () => {
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

  it("should call onAddClass()", () => {

    const onAddClassSpy = spyOn(component, "onAddClass");

    component.onAddClass();

    expect(onAddClassSpy).toHaveBeenCalledTimes(1);

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
