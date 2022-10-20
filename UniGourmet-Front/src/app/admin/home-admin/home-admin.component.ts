import { Component, OnInit } from '@angular/core';
import {
  faChalkboardUser,
  faGraduationCap,
  faUserGroup,
  faList,
  faBasketShopping,
  faBook,
  faNoteSticky,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css'],
})
export class HomeAdminComponent implements OnInit {
  name = 'Grazi';
  //fontAwesome Icons
  faChalkboardUser = faChalkboardUser;
  faGraduationCap = faGraduationCap;
  faUserGroup = faUserGroup;
  faList = faList;
  faBasketShopping = faBasketShopping;
  faBook = faBook;
  faNoteSticky = faNoteSticky;
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
