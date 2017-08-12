// import { Component, OnInit } from '@angular/core';
//
//
// import { Master } from '../../models/master.model';
// import { MasterService } from '../../master.service';
//
// @Component({
//   selector: 'app-teacher',
//   templateUrl: './teacher.component.html',
//   styleUrls: ['./teacher.component.css']
// })
// export class TeacherComponent implements OnInit {
//   masters: Master[];
//
//   constructor(private masterService: MasterService) { }
//
//
//   ngOnInit() {
//     this.masterService.getMasters()
//     .subscribe(
//       (masters: Master[]) => {
//         this.masters = masters;
//       }
//     )
//   }
//
// }



import { Component, Input } from "@angular/core";

import { Master } from "../models/master.model";
import { MasterService } from "../master.service";

@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
    @Input() masters: Master;

    constructor(private masterService: MasterService) {}


  }
