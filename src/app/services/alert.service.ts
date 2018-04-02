import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {

  subject: Subject<any> = new Subject<any>();

  constructor() { }

  error(message: string) {
    this.subject.next({type: 'error', message: message})
  }

}
