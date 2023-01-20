import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalStatesServiceService {
  mobileMenu = false;
  mobileMenuChanges = new Subject<boolean>();

  public isAsyncOperationRunning$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  changeMobileMenu(state: boolean) {
    this.mobileMenuChanges.next(state);
    this.mobileMenu = state;
  }
}
