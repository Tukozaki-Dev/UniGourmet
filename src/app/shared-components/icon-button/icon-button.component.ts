import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
  public isMobileMenu: boolean;

  @Input() btnIcon: string = '';
  @Input() btnColor: string = '';

  @Output() iconBtnEvent = new EventEmitter<string>();

  constructor(
    private globalStatesService: GlobalStatesServiceService,
  ) {
     this.isMobileMenu = this.globalStatesService.mobileMenu; 
    }

  ngOnInit(): void {
    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });
  }

  iconBtnClick() {
    this.iconBtnEvent.emit();
  }

}
