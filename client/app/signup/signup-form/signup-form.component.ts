import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from '../../auth/auth.service';
import { Apprentice } from '../../models/apprentice.model';
import { Master } from '../../models/master.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  myForm: FormGroup

  constructor(private authService: AuthService) {}

  onSubmit() {
    const apprentice = new Apprentice (
      this.myForm.value.username,
      this.myForm.value.firstname,
      this.myForm.value.lastname,
      this.myForm.value.email,
      this.myForm.value.password
    );
    this.authService.signup(apprentice)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            firstname: new FormControl(null, Validators.required),
            lastname: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
  }

}
