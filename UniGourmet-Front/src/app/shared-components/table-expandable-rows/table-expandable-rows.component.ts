import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogInterface } from '../dialog/dialog.interface';

@Component({
  selector: 'app-table-expandable-rows',
  templateUrl: './table-expandable-rows.component.html',
  styleUrls: ['./table-expandable-rows.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableExpandableRowsComponent implements OnInit {

  //variables used for property binding coming from icon-button component (btnColor and btnIcon)
  editBtnColor: string = 'primary';
  editBtnIcon: string = 'edit'; 
  deleteBtnColor: string = 'warn';
  deleteBtnIcon: string = 'delete';

  //defining Input() to receive from parent the name of table's colunms in a string array
  @Input() columnsToDisplay: string[] = [];
  // columnsToDisplay: string[] = ['name', 'registerCode', 'actions'];
  
  //defining Input() to receive from parent the data to populate the table
  @Input() tableData: any[] = []; 
  
  columnsToDisplayWithExpand: [...string[], string];

  @Input() expandedContentTitle: string[] = [];
  
  //creating variable of type MatTableDataSource. This variable will receive tableData later
  dataSource: MatTableDataSource<any>;
  
  expandedElement: any | null;


  @Output() onClickEditEvent: EventEmitter<string> = new EventEmitter();

  @Output() callbackMethodEvent = new EventEmitter<string>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tableData);

    this.columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];

    // this.expandedContent = this.columnsToDisplay.slice(-1);
    // console.log(this.expandedContent);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //detect when itens are modified in service and then "update" table data source
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.tableData);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  //emit a event when user clicks on edit button
  onClickEdit(id: string) {
    this.onClickEditEvent.emit(id);
  }

  //open dialog(modal) when user clicks on delete button
  onClickDelete(id: string) {
    this.openDialog(id);
  }

  //dialog (modal) start
  openDialog(id: string) {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Deletar',
      dialogContent: 'Tem certeza que deseja deletar?',
      cancelButtonLabel: 'Cancelar',
      confirmButtonLabel: 'Sim',
      callbackMethod: () => {
        this.sendSubmit(id);
      },
    };
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }
  //dialog (modal) end

  //emit an event when dialog's callbackMethod function is called
  sendSubmit(id: string) {
    this.callbackMethodEvent.emit(id);
  }

}
