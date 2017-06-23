import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { ErrorHandleService } from './utils/error-handle.service';
import { HttpInterceptor } from './utils/http-interceptor.service';
import { SERVICE_BASE_URL } from './tokens';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: SERVICE_BASE_URL, useValue: 'https://jsonplaceholder.typicode.com/' },
    ErrorHandleService,
    {
      provide: Http,
      deps: [XHRBackend, RequestOptions, ErrorHandleService],
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, service: ErrorHandleService) => new HttpInterceptor(backend, defaultOptions, service)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
