import { Component, OnInit } from '@angular/core';
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
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';

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
  login = 'Logout';

  public isMobileMenu: boolean;

  constructor(private globalStatesService: GlobalStatesServiceService) {
    this.isMobileMenu = this.globalStatesService.mobileMenu;
  }

  ngOnInit() {
    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });
  }
}
