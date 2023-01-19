export class EventNote {
  eventID: number;
  eventDate: Date;
  eventType: string;
  notes: string;
  profile: string;
  category: string;
  constructor(
    eventID: number,
    eventDate: Date,
    eventType: string,
    notes: string,
    profile: string,
    category: string
  ) {
    this.eventID = eventID;
    this.eventDate = eventDate;
    this.eventType = eventType;
    this.notes = notes;
    this.profile = profile;
    this.category = category;
  }
}
