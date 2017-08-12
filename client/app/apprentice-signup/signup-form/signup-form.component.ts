import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from '../../auth/auth.service';
import { Apprentice } from '../../models/apprentice.model';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  apprenticeSignupForm: FormGroup;

  constructor(private authService: AuthService) {}

  onApprenticeSignup() {
    const apprentice = new Apprentice (
      this.apprenticeSignupForm.value.username,
      this.apprenticeSignupForm.value.firstname,
      this.apprenticeSignupForm.value.lastname,
      this.apprenticeSignupForm.value.email,
      this.apprenticeSignupForm.value.password
    );
    this.authService.apprenticeSignup(apprentice)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.apprenticeSignupForm.reset();
  }

  ngOnInit() {
    this.apprenticeSignupForm = new FormGroup({
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
