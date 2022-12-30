import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() icon?: string = '';
  @Input() text: string = '';
  
  @Output() btnClickEvent = new EventEmitter<MouseEvent>();
  
  btnWithIcon = false;

  constructor() { }
  
  ngOnInit(): void {
    if(!this.icon) {
      this.btnWithIcon = true;
    }
  }

  btnClick(event: MouseEvent) {
    this.btnClickEvent.emit(event);
  }

}
