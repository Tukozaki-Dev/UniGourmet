import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { AdminModule } from '../admin.module';

import { EventAdminComponent } from './event-admin.component';

describe('EventAdminComponent', () => {
  let component: EventAdminComponent;
  let fixture: ComponentFixture<EventAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminModule, AppModule],
      declarations: [ EventAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Event Admin Component', () => {
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

  it("should call onDeleteEvent()", () => {

    const onDeleteEventSpy = spyOn(component, "onDeleteEvent");

    component.onDeleteEvent("id");

    expect(onDeleteEventSpy).toHaveBeenCalledTimes(1);

  });
});
