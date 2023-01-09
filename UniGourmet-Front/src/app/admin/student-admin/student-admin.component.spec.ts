import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { AdminModule } from '../admin.module';

import { StudentAdminComponent } from './student-admin.component';

fdescribe('StudentAdminComponent', () => {
  let component: StudentAdminComponent;
  let fixture: ComponentFixture<StudentAdminComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AdminModule, AppModule],
      declarations: [StudentAdminComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(StudentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create Student Admin Component', () => {
    expect(component).toBeTruthy();
  });

  it("should call goToCreateNew()", () => {

    const goToCreateNewSpy = spyOn(component, "goToCreateNew");

    component.goToCreateNew();

    expect(goToCreateNewSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onClickEdit()", () => {

    const onClickEditSpy = spyOn(component, "onClickEdit");

    component.onClickEdit("id");

    expect(onClickEditSpy).toHaveBeenCalledTimes(1);

  });

  it("should call onDeleteStudent()", () => {

    const onDeleteStudentSpy = spyOn(component, "onDeleteStudent");

    component.onDeleteStudent("id");

    expect(onDeleteStudentSpy).toHaveBeenCalledTimes(1);

  });

});
