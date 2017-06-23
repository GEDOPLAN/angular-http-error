import { Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {ErrorHandleService} from './error-handle.service';

// operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpInterceptor extends Http {

    constructor(backend: XHRBackend,options: RequestOptions, private errorService:ErrorHandleService) {
        super(backend, options)
    }

    public request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options)
            .catch(this.handleError)
    }

    public handleError = (error: Response) => {
        this.errorService.addError(error.toString());
        return Observable.throw(error)
    }
}