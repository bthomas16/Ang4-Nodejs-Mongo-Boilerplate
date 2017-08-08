import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Apprentice } from "../models/apprentice.model";
import { Master } from "../models/master.model";

@Injectable()
export class AuthService {
    constructor(private http: Http) {}
    masters: Master[]

    apprenticeSignup(apprentice: Apprentice) {
        const body = JSON.stringify(apprentice);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/apprentice/signup', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    apprenticeLogin(apprentice: Apprentice){
      const body = JSON.stringify(apprentice);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post('http://localhost:3000/apprentice/signin', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }



    // signin(apprentice: Apprentice) {
    //     const body = JSON.stringify(apprentice);
    //     const headers = new Headers({'Content-Type': 'application/json'});
    //     return this.http.post('http://localhost:3000/apprentice/signin', body, {headers: headers})
    //         .map((response: Response) => response.json())
    //         .catch((error: Response) => Observable.throw(error.json()));
    // }
    //
    // logout() {
    //     localStorage.clear();
    // }
    //
    // isLoggedIn() {
    //     return localStorage.getItem('token') !== null;
    // }
}
