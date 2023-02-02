
export interface DialogWithChipInterface {
  dialogChipsContent: any;
  dialogChipLabel: string;
  dialogChipPlaceholder: string;
  confirmSaveLabel: string;
  dialogContent: string;
  allChips: {name: string, id: string}[];
  callbackMethod: (chips:{name: string, id: string}[]) => void;
}
