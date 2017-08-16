import { Component, OnInit } from '@angular/core';

import { Apprentice } from '../models/apprentice.model';
import { ApprenticeService } from '../apprentice.service';

@Component({
  selector: 'app-apprentice-profile',
  templateUrl: './apprentice-profile.component.html',
  styleUrls: ['./apprentice-profile.component.css']
})
export class ApprenticeProfileComponent implements OnInit {
  apprentice: Apprentice;

  constructor(private apprenticeService: ApprenticeService) { }

  ngOnInit() {
    // this.apprenticeService.getApprentice()
    //   .subscribe((apprentices: Apprentice[]) => {
    //     this.apprentices = apprentices;
    //   })
      this.apprenticeService.getApprentice()
      .subscribe(apprentice => this.apprentice = apprentice);
  }

}
