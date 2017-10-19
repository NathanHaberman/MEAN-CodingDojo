import { Injectable } from '@angular/core';

// Import these 3 always
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ExampleService {

  // Create the private variable _http
  constructor(private _http: Http) { }

  // This talks to the API or the DB

  // Change function name
  exampleServiceFunction(param){
    return this._http.get(`route/${param}`)
    .map(data => data.json())
    .toPromise();
  }
}
