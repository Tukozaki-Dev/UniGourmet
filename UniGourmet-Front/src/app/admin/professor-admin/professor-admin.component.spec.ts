import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { AdminModule } from '../admin.module';

import { ProfessorAdminComponent } from './professor-admin.component';

fdescribe('ProfessorAdminComponent', () => {
  let component: ProfessorAdminComponent;
  let fixture: ComponentFixture<ProfessorAdminComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AdminModule, AppModule],
      declarations: [ProfessorAdminComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProfessorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the Professor Admin Component', () => {
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

  it("should call onDeleteProfessor()", () => {

    const onDeleteProfessorSpy = spyOn(component, "onDeleteProfessor");

    component.onDeleteProfessor("id");

    expect(onDeleteProfessorSpy).toHaveBeenCalledTimes(1);

  });


});
