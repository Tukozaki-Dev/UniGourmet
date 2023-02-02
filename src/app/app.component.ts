import { Component, HostListener, OnInit } from '@angular/core';
import { GlobalStatesServiceService } from './services/global-states-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private globalStatesService: GlobalStatesServiceService) {}
  //See the window size, and if its mobile, change de "mobile menu" var to true
  @HostListener('window:resize') onResize() {
    if (window.screen.width <= 540) {
      this.globalStatesService.changeMobileMenu(true);
    } else {
      this.globalStatesService.changeMobileMenu(false);
    }
  }

  ngOnInit() {
    if (window.screen.width <= 540) {
      this.globalStatesService.changeMobileMenu(true);
    } else {
      this.globalStatesService.changeMobileMenu(false);
    }
  }

}
