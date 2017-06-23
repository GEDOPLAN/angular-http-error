import { Injectable, ErrorHandler } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx'

@Injectable()
export class ErrorHandleService {

  public messages = new Subject<string>();

  addError(error: string) {
    this.messages.next(error);
    throw error;
  }
}
