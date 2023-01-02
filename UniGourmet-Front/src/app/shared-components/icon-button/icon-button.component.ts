import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
  @Output() iconBtnEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  iconBtnClick(value: string) {
    this.iconBtnEvent.emit(value);
  }

}
