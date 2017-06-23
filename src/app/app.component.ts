import { Component } from '@angular/core';
import { ErrorHandleService } from './utils/error-handle.service'
import { Observable, Subject } from 'rxjs/Rx'

import { JSONPlaceHolderService } from './services/jsonplace-holder.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JSONPlaceHolderService]
})
export class AppComponent {

  globalErrorMessage: string = null;

  userDaten: any;

  constructor(errorService: ErrorHandleService, private service: JSONPlaceHolderService) {
    errorService.messages.subscribe(e => {
      this.globalErrorMessage = e;
      setTimeout(() => this.globalErrorMessage = null, 5000);
    });
  }

  ladeDaten() {
    this.service.ladeUserDaten(5).subscribe(u => this.userDaten = u);
  }

  ladeFehlerhafteDaten() {
    this.service.ladeUserDaten(500).subscribe(u => this.userDaten = u);
  }
}
