import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.auth.getUser()) {
      this.router.navigate(['/home']);
    }
  }

  public login(): void {
    if (this.loginForm.invalid) {
      alert('Invalid data!');
    } else {
      if (this.auth.login(
        this.loginForm.get('username').value, 
        this.loginForm.get('password').value)
      ) {
        this.router.navigate(['/home']);
      } else {
        alert('This user or password are invalid!');
      }
    }
  }
}
