import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'

export class Event {
  key: string;
  message: any;
}

@Injectable()
export class MessageService {
  private actionSubject = new Subject<Event>();

  public sendMessage(action: Event): void {
    this.actionSubject.next(action);
  }

  public getMessage(): Observable<Event> {
    return this.actionSubject.asObservable();
  }
}
