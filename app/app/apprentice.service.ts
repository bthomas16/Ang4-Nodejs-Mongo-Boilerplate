import { Injectable } from '@angular/core'
import { Http} from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Apprentice } from "./models/apprentice.model";

const server = 'http://localhost:3000/';
const apprenticeId = localStorage.getItem("apprenticeId");

@Injectable()
export class ApprenticeService {
  private apprentice: Apprentice;

  constructor(private http: Http){}




  getApprentice() {
     return this.http.get(server + 'apprentice/profile-retrieve/' + apprenticeId)
      .map(res => {
       const apprentice = res.json().obj;
       return apprentice;
   })
}
}
