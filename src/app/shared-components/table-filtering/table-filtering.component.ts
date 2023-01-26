import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogInterface } from '../dialog/dialog.interface';


@Component({
  selector: 'app-table-filtering',
  templateUrl: './table-filtering.component.html',
  styleUrls: ['./table-filtering.component.css']
})
export class TableFilteringComponent implements OnInit {
  public isMobileMenu: boolean;

  //variables used for property binding coming from icon-button component (btnColor and btnIcon)
  editBtnColor: string = 'primary';
  editBtnIcon: string = 'edit'; 
  deleteBtnColor: string = 'warn';
  deleteBtnIcon: string = 'delete'; 
  detailsBtnColor: string = 'tertiary'; 
  detailsBtnIcon: string = 'add'; 

  //defining Input() to receive from parent the name of table's colunms in a string array
  @Input() displayedColumns: object = {};
  objectKeys = Object.keys;

  //defining Input() to receive from parent the data to populate the table
  @Input() tableData: any[] = []; 
  
  //creating variable of type MatTableDataSource. This variable will receive tableData later
  dataSource: MatTableDataSource<any>;

  @Output() onClickEditEvent: EventEmitter<string> = new EventEmitter();

  @Output() callbackMethodEvent = new EventEmitter<string>();

  @Output() onClickDetailsEvent: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private globalStatesService: GlobalStatesServiceService,
    public dialog: MatDialog,
  ) { 
    this.isMobileMenu = this.globalStatesService.mobileMenu;
  }

  ngOnInit(): void {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.tableData);

    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });
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

  //emit a event when user clicks on button
  onClickDetails(id: string) {
    this.onClickDetailsEvent.emit(id);
  }

}
