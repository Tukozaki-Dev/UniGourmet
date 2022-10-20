export class Event {
  type: string; //eu acho que o type tem que ser um Enum, analisar depois
  notes: string;
  profile: string;
  isPrivate: boolean;
  constructor(
    type: string,
    notes: string,
    profile: string,
    isPrivate: boolean
  ) {
    this.type = type;
    this.notes = notes;
    this.profile = profile;
    this.isPrivate = isPrivate;
  }
}
