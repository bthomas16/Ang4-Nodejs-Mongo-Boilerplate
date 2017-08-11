import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Apprentice } from "../models/apprentice.model";
import { Master } from "../models/master.model";
const server = 'https://learnt.herokuapp.com/';

@Injectable()
export class AuthService {
    constructor(private http: Http) {}

    apprenticeSignup(apprentice: Apprentice) {
        const body = JSON.stringify(apprentice);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(server + 'apprentice/signup', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    masterSignup(master: Master) {
      const body = JSON.stringify(master);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post(server + 'master/signup', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) =>
        Observable.throw(error.json()));
    }

    apprenticeLogin(apprentice: Apprentice){
      const body = JSON.stringify(apprentice);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post(server + 'apprentice/login', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }

    masterLogin(master: Master) {
      const body = JSON.stringify(master);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post(server + 'master/login', body, {headers: headers})
        .map((response: Response) =>
        response.json())
        .catch((error: Response) => Observable.throw(error.json()));
      }

    }
