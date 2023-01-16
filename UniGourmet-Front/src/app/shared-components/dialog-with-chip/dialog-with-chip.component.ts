import { Component, Inject, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogWithChipInterface } from './dialog-with-chip.interface';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, Validators } from '@angular/forms';
import { startWith, map, Observable } from 'rxjs';
import { GlobalStatesServiceService } from 'src/app/services/global-states-service.service';

@Component({
  selector: 'app-dialog-with-chip',
  templateUrl: './dialog-with-chip.component.html',
  styleUrls: ['./dialog-with-chip.component.css']
})
export class DialogWithChipComponent implements OnInit {

  public isMobileMenu: boolean;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  chipCtrl = new FormControl('', Validators.required);
  filteredChips: Observable<any[]>

  constructor(
    public dialogRef: MatDialogRef<DialogWithChipComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: DialogWithChipInterface,
    private globalStatesService: GlobalStatesServiceService,
  ) {
    this.filteredChips = this.chipCtrl.valueChanges.pipe(
      startWith(null),
      map((typedOnInput: string | null) => {
        return typedOnInput
          ? this._filterChip(typedOnInput)
          : this.dialogData.allChips.slice();
      })
    );
    this.isMobileMenu = this.globalStatesService.mobileMenu;
  }

  ngOnInit() {
    this.globalStatesService.mobileMenuChanges.subscribe((val) => {
      this.isMobileMenu = val;
    });
  }

  //method  to remove the selected chip from the list (array)
  removeChip(chipId: string): void {
    const index = this.dialogData.dialogChipsContent.findIndex((s) => {
      return s == chipId;
    });

    if (index >= 0) {
      this.dialogData.dialogChipsContent.splice(index, 1);
    }

  }
  //method  to select and insert the selected chip specialty from the list (array)
  selectedChip(event: MatAutocompleteSelectedEvent): void {
    const chip = event.option.value;
    this.dialogData.dialogChipsContent.push(chip);
  }

  //List all specialties and filter while the user type a letter
   private _filterChip(value: string) {
    const filterValue = value.toLowerCase();

    return this.dialogData.allChips.filter((chip) =>
      chip.name.toLowerCase().includes(filterValue)
    );
  }

  handleDialogSubmit() {
    this.dialogData.callbackMethod(this.dialogData.dialogChipsContent);
  }


}
