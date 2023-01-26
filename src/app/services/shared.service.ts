import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface IPathParams {
  path: string;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private pathParamsData = new BehaviorSubject<IPathParams>(undefined);


  constructor(
    private router: Router,
  ) { }

  setPathParams(data: IPathParams): void {
    this.pathParamsData.next(data);
  }

  getPathParams(): Observable<IPathParams> {
    return this.pathParamsData;
  }

  sendTo(path: string) {
    //send to rote, with id parameter
    this.router.navigate([path]);
  }

  sendToId(path: string, id: string) {
    //send to rote, with id parameter
    this.router.navigate([path, id]);
  }
}
