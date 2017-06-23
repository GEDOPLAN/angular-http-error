import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import {SERVICE_BASE_URL} from '../tokens'

@Injectable()
export class JSONPlaceHolderService {

  constructor(private http: Http, @Inject(SERVICE_BASE_URL) private baseurl:string) { }

  ladeUserDaten(userId: number): Observable<any> {
    return this.http.get( this.baseurl + 'users/' + userId).map(r => r.json());
  }

}
