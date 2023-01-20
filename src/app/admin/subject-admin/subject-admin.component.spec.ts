import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { AdminModule } from '../admin.module';

import { SubjectAdminComponent } from './subject-admin.component';

fdescribe('SubjectAdminComponent', () => {
  let component: SubjectAdminComponent;
  let fixture: ComponentFixture<SubjectAdminComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AdminModule, AppModule],
      declarations: [SubjectAdminComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SubjectAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the Subject Admin Component', () => {
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

  it("should call onDeleteDiscipline()", () => {

    const onDeleteDisciplineSpy = spyOn(component, "onDeleteDiscipline");

    component.onDeleteDiscipline("id");

    expect(onDeleteDisciplineSpy).toHaveBeenCalledTimes(1);

  });

});
