import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { Apprentice } from '../models/apprentice.model';
import {AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-apprentice-login',
  templateUrl: './apprentice-login.component.html',
  styleUrls: ['./apprentice-login.component.css']
})
export class ApprenticeLoginComponent implements OnInit {
  apprenticeLoginForm: FormGroup;

  constructor(private authService: AuthService, private router:Router) { }

  onApprenticeLogin() {
    const apprentice = new Apprentice(this.apprenticeLoginForm.value.username, this.apprenticeLoginForm.value.password);
     this.authService.apprenticeLogin(apprentice)
    .subscribe(
      data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('apprenticeId', data.apprenticeId);
        this.router.navigateByUrl("/student/{{apprenticeId}}")
      },
      error => console.error(error)
    );
    // this.apprenticeLoginForm.reset();
  }


  ngOnInit() {
    this.apprenticeLoginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

}
