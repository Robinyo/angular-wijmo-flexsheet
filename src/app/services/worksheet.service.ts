import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WorksheetService {

  private selectionFormatState = new Subject<any>();

  setState(state: any) {
    this.selectionFormatState.next(state);
  }

  getState(): Observable<any> {
    return this.selectionFormatState.asObservable();
  }
}
