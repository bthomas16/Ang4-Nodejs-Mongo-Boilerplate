import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../auth/auth.service';
import { Master } from '../../models/master.model';

@Component({
  selector: 'app-master-signup-form',
  templateUrl: './master-signup-form.component.html',
  styleUrls: ['./master-signup-form.component.css']
})
export class MasterSignupFormComponent implements OnInit {
  masterSignupForm: FormGroup;

  constructor(private authService: AuthService) { }

  onMasterSignup(){
    const master = new Master(
      this.masterSignupForm.value.firstname,
      this.masterSignupForm.value.lastname,
      this.masterSignupForm.value.email,
      this.masterSignupForm.value.password,
      this.masterSignupForm.value.yearsExp,
      this.masterSignupForm.value.skill1,
      this.masterSignupForm.value.skill2,
      this.masterSignupForm.value.skill3
    );
    this.authService.masterSignup(master)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.masterSignupForm.reset();
  }

  ngOnInit() {
    this.masterSignupForm = new FormGroup({
      email: new FormControl(null, [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      yearsExp: new FormControl(null, Validators.required),
      skill1: new FormControl(null, Validators.required),
      skill2: new FormControl(null, Validators.required),
      skill3: new FormControl(null, Validators.required)
    });
  }

}
