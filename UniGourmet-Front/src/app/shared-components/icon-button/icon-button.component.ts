import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
  @Input() btnIcon: string = '';
  @Input() btnColor: string = '';

  @Output() iconBtnEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  iconBtnClick() {
    this.iconBtnEvent.emit();
  }

}
