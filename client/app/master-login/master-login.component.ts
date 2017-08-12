import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

import { Master } from '../models/master.model';

@Component({
  selector: 'app-master-login',
  templateUrl: './master-login.component.html',
  styleUrls: ['./master-login.component.css']
})
export class MasterLoginComponent implements OnInit {
  masterLoginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  onMasterLogin(){
    const master = new Master(this.masterLoginForm.value.email, this.masterLoginForm.value.password);
      this.authService.masterLogin(master)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('masterId', data.masterId);
          this.router.navigateByUrl('/teacher/{{masterId}}')
        },
        error => console.log(error)
      );
      // this.masterLoginForm.reset();
  }

  ngOnInit() {
    this.masterLoginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

}
