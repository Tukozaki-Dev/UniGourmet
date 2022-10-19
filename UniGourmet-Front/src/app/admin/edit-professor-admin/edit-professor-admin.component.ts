import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Component, OnInit } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
export interface Subject {
  name: string;
}
export interface Specialty {
  name: string;
}
@Component({
  selector: 'app-edit-professor-admin',
  templateUrl: './edit-professor-admin.component.html',
  styleUrls: ['./edit-professor-admin.component.css'],
})
export class EditProfessorAdminComponent implements OnInit {
  faImage = faImage;
  editProfessor =
    'Você está no modo edição, selecione o professor que você quer editar.';
  addProfessor =
    'Você está no modo cadastro de professor, preencha todos os dados abaixo corretamente.';

  editMode: boolean = true;

  professors = ['Graziely Tukozaki', 'Izabela Soares', 'Thiago Tukozaki'];

  selected = '';
  professorRegister = '';
  professorName = '';
  mobileMode = false;
  constructor() {}

  //vai precisar do service do professor mandar o status do botão, se foi clicado o botão de editar ou cadastrar

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  subjects: Subject[] = [
    { name: 'Cozinha Italiana' },
    { name: 'Cozinha Confeitaria' },
    { name: 'Confeitaria' },
    { name: 'Panificação' },
  ];

  specialties: Specialty[] = [
    { name: 'Carne' },
    { name: 'Confeitaria' },
    { name: 'Massa' },
    { name: 'Peixe' },
  ];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.subjects.push({ name: value });
    }
    event.chipInput!.clear();
  }

  remove(subject: Subject): void {
    const index = this.subjects.indexOf(subject);

    if (index >= 0) {
      this.subjects.splice(index, 1);
    }
  }

  ngOnInit(): void {
    if (window.screen.width <= 540) {
      this.mobileMode = true;
    } else {
      this.mobileMode = false;
    }
  }
}
