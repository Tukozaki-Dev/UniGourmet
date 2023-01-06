import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-with-button',
  templateUrl: './select-with-button.component.html',
  styleUrls: ['./select-with-button.component.css']
})
export class SelectWithButtonComponent implements OnInit {

  deleteDiscipline = "Deletar";

  @Input() selectLabel = "Matéria";
  @Input() selectOptions = [];
  @Output() deleteSelectChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteSelect(selectedComponent: any){
    this.deleteSelectChange.emit(selectedComponent);
  }
}
