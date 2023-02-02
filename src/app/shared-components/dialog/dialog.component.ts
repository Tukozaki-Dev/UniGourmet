import { Component, Inject, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
  }

  handleDialogSubmit() {
    this.dialogData.callbackMethod();
  }

}

//how to use in parent component example:
// openDialog() {
//   const dialogInterface: DialogInterface = {
//     dialogHeader: 'Deletar',
//     dialogContent: 'Tem certeza que deseja deletar?',
//     cancelButtonLabel: 'Cancelar',
//     confirmButtonLabel: 'Sim',
//     callbackMethod: () => {
//       this.anyFunction();  --> function to call when click event in dialog is emitted
//     },
//   };
//   this.dialog.open(DialogComponent, {
//     width: '300px',
//     data: dialogInterface,
//   });
// }
