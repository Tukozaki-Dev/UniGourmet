import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EventNote } from '../shared-components/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventChanged = new Subject<EventNote[]>();

  private eventTypes = ['Lição de casa', 'Prova', 'Trabalho', 'Outro'];
  private profiles = ['Aluno', 'Professor', 'Ambos'];
  private categories = ['Público', 'Privado'];

  private events: EventNote[] = [
    new EventNote ("100", new Date (2023,11,6),'06/11/2023', 'Prova', 'Uma nota aleatoria', 'Professor', 'Público'),
    new EventNote ("101", new Date (2023,11,8), '08/11/2023', 'Trabalho', 'Outra nota aleatoria', 'Aluno', 'Público'),
    new EventNote ("102", new Date (2023,11,12), '12/11/2023', 'Outro', 'Apenas uma anotação particular', 'Professor', 'Privado'),
    new EventNote ("103", new Date (2023,11,20), '20/11/2023', 'Lição de casa', 'Fazendo uma nota pessoal', 'Aluno', 'Privado'),
  ];

  constructor() { }

  getEventTypesOptions() {
    return this.eventTypes;
  }

  getProfilesOptions() {
    return this.profiles;
  }

  getCategoriesOptions() {
    return this.categories;
  }

  getEvents() {
    return this.events;
  }

  getEvent(id: string) {
    return this.events.find((event) => {
      return event.registerCode == id;
    });
  }

  addEvent(newEvent: EventNote) {
    this.events.push(newEvent);
    this.eventChanged.next(this.events.slice());
  }

  updateEvent(id: string, editedEvent: EventNote) {
    const index = this.events.findIndex((selectedEvent) => {
      return id === selectedEvent.registerCode;
    });
    this.events[index] = editedEvent;
    this.eventChanged.next(this.events.slice());
  }



  deleteEvent(id: string) {
    this.events = this.events.filter((i)=>{ return i.registerCode !== id});
    return this.events;
  }
}
