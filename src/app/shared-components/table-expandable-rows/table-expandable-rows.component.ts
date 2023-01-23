import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogInterface } from '../dialog/dialog.interface';

@Component({
  selector: 'app-table-expandable-rows',
  templateUrl: './table-expandable-rows.component.html',
  styleUrls: ['./table-expandable-rows.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableExpandableRowsComponent implements OnInit {
  public isMobileMenu: boolean;

  //variables used for property binding coming from icon-button component (btnColor and btnIcon)
  editBtnColor: string = 'primary';
  editBtnIcon: string = 'edit';
  deleteBtnColor: string = 'warn';
  deleteBtnIcon: string = 'delete';
  detailsBtnColor: string = 'tertiary';
  detailsBtnIcon: string = 'add';

  //defining Input() to receive from parent the name of table's colunms in a string array
  @Input() columnsToDisplay: string[] = [];

  //defining Input() to receive from parent the data to populate the table
  @Input() tableData: any[] = [];

  columnsToDisplayWithExpand: [...string[], string];

  //creating variable of type MatTableDataSource. This variable will receive tableData later
  dataSource: MatTableDataSource<any>;

  expandedElement: any | null;

  @Output() onClickEditEvent: EventEmitter<string> = new EventEmitter();

  @Output() callbackMethodEvent = new EventEmitter<string>();

  @Output() onClickDetailsEvent: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private globalStatesService: GlobalStatesServiceService,
    public dialog: MatDialog
  ) {
    this.isMobileMenu = this.globalStatesService.mobileMenu;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tableData);

    this.columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];

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

  translateKey(key) {
    switch (key) {
      case 'name':
        return 'nome';
      case 'registerCode':
        return 'código de registro';
      case 'specialties':
        return 'especialidades';
      case 'subjects':
        return 'matérias';
      case 'semester':
        return 'semestre';
      case 'studentClass':
        return 'Turma';
      case 'numberOfClasses':
        return 'Quantidade de Aulas/Semestre';
      case 'className':
        return 'nome';
      case 'classCode':
        return 'código de registro';
      case 'shift':
        return 'turno';
      case 'disciplines':
        return 'matérias';
      case 'category':
        return 'modalidade';
      case 'eventDateString':
        return 'Data';
      case 'eventType':
        return 'Tipo de Anotação';
      case 'note':
        return 'Anotação';
      case 'profile':
        return 'Tipo de Perfil';
      default:
        return '';
    }
  }

  isObj(val): boolean {
    return typeof val === 'object';
  }

  isExpandable(val) {
    if (val == 'imagePath') {
      return true;
    }
    if (val == 'name') {
      return true;
    }
    if (val == 'registerCode') {
      return true;
    }
    if (val == 'shift') {
      return true;
    }
    if (val == 'eventDate') {
      return true;
    }
    if (val == 'eventDateString') {
      return true;
    }
    if (val == 'id') {
      return true;
    }
    if (val == 'category') {
      return true;
    } else {
      return false;
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
