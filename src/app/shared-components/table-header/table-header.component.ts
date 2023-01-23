import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {
  //button text - assigned to Input() [text] coming from component 'button', 
  //is also an Input() to receive info comming from component using the 'table-header' component
  @Input() btnText: string = '';

  //defining Input() to receive from parent the name of table's type (ex: ingredient)
  @Input() tableType: string = '';

  @Output() goToCreateNewEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //emit a event when user clicks on button
  goToCreateNew() {
    this.goToCreateNewEvent.emit();
  }

}
