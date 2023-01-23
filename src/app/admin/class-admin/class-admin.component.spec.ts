import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { AdminModule } from '../admin.module';

import { ClassAdminComponent } from './class-admin.component';

fdescribe('ClassAdminComponent', () => {
  let component: ClassAdminComponent;
  let fixture: ComponentFixture<ClassAdminComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AdminModule, AppModule],
      declarations: [ClassAdminComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ClassAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create Class Admin Component', () => {
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

  it("should call onDeleteClass()", () => {

    const onDeleteClassSpy = spyOn(component, "onDeleteClass");

    component.onDeleteClass("id");

    expect(onDeleteClassSpy).toHaveBeenCalledTimes(1);

  });

});
