import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalStatesServiceService {
  mobileMenu = false;
  mobileMenuChanges = new Subject<boolean>();

  constructor() {}

  changeMobileMenu(state: boolean) {
    this.mobileMenuChanges.next(state);
    this.mobileMenu = state;
  }
}
