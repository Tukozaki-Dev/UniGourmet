export class EventNote {
  registerCode: string;
  eventDate: Date;
  eventDateString?: string;
  eventType: string;
  note: string;
  profile: string;
  category: string;
  constructor(
    registerCode: string,
    eventDate: Date,
    eventDateString: string,
    eventType: string,
    note: string,
    profile: string,
    category: string
  ) {
    this.registerCode = registerCode;
    this.eventDate = eventDate;
    this.eventDateString = eventDateString;
    this.eventType = eventType;
    this.note = note;
    this.profile = profile;
    this.category = category;
  }
}
