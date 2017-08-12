import { Component, OnInit } from '@angular/core';


import { Master } from '../models/master.model';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-teachers-preview',
  templateUrl: './teachers-preview.component.html',
  styleUrls: ['./teachers-preview.component.css']
})
export class TeachersPreviewComponent implements OnInit {
  masters: Master[];

  constructor(private masterService: MasterService) { }


  ngOnInit() {
    this.masterService.getMasters()
    .subscribe(
      (masters: Master[]) => {
        this.masters = masters;
      }
    )
  }

}
