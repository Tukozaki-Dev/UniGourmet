import { Component, HostListener, OnInit } from '@angular/core';
import {
  faChalkboardUser,
  faGraduationCap,
  faUserGroup,
  faList,
  faBasketShopping,
  faBook,
  faNoteSticky,
  faCalendar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-adm',
  templateUrl: './header-adm.component.html',
  styleUrls: ['./header-adm.component.css'],
})
export class HeaderAdmComponent implements OnInit {
  //fontAwesome Icons
  faChalkboardUser = faChalkboardUser;
  faGraduationCap = faGraduationCap;
  faUserGroup = faUserGroup;
  faList = faList;
  faBasketShopping = faBasketShopping;
  faBook = faBook;
  faNoteSticky = faNoteSticky;
  faCalendar = faCalendar;
  faUser = faUser;
  //fontAwesome Icons

  mobileMenu = false;
  login = 'Logout';

  constructor() {}
  //See the window size, and if its mobile, change de "mobile menu" var to true
  @HostListener('window:resize') onResize() {
    if (window.screen.width <= 420) {
      this.mobileMenu = true;
    } else {
      this.mobileMenu = false;
    }
  }

  ngOnInit() {}
}
