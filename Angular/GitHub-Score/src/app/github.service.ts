import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class GithubService {
  userInfo: number;

  constructor(private _http: Http) { }

  // This talks to the API or, in future cases, the DB
  retrieveUserInfo(username){
    return this._http.get(`https://api.github.com/users/${username}`)
    .map(user => user.json())
    .toPromise();
  }

}
