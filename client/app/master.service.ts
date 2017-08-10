import { Injectable } from '@angular/core'
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Master } from "./models/master.model";

@Injectable()
  export class MasterService {
    private masters: Master[] = [];

    constructor(private http: Http) {}


    // getMasters() {
    //   return this.http.get('http://localhost:3000/master/retrieve-all')
    //   .map((response: Response) => {
    //     const masters = response.json().obj;
    //     let updatedMasters: Master[] = [];
    //     for (let master of masters ){
    //       updatedMasters.push(new Master(
    //         master.firstname,
    //         master.lastname,
    //         master.email,
    //         master.password,
    //         master.yearsExp,
    //         master.skill1,
    //         master.skill2,
    //         master.skill3
    //       ));
    //     }
    //       this.masters = updatedMasters;
    //       return updatedMasters;
    //   })
    //   .catch((error: Response) => Observable.throw(error.json()));
    // }

}
