import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';
import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInterface } from './dialog.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: DialogInterface,
    public globalStatesService: GlobalStatesServiceService,
  ) { }

  ngOnInit(): void {
  }

  handleDialogSubmit() {
    console.log('testando funcao handleDialogSubmit no component dialog');
    this.dialogData.callbackMethod();
  }

}

//how to use in parent component example:
// openDialog(id: string) {
//   const dialogInterface: DialogInterface = {
//     dialogHeader: 'Deletar',
//     dialogContent: 'Tem certeza que deseja deletar?',
//     cancelButtonLabel: 'Cancelar',
//     confirmButtonLabel: 'Sim',
//     callbackMethod: () => {
//       this.dialogSubmitDelete(id);  --> this function most be created, according to needs (in this case is a function with a id parameter)
//     },
//   };
//   this.dialog.open(DialogComponent, {
//     width: '300px',
//     data: dialogInterface,
//   });
// }
