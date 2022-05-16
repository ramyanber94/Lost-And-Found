import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  focus!: any;
  focus1!: any;
  loginForm = new FormGroup({
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
  })
  constructor(private http: HttpService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    if (this.loginForm.valid) {
      this.http.login(this.loginForm.value).subscribe((result: any) => {
        if (result.response !== "failed") {
          localStorage.setItem('id', result.response)
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/']);
        }
      })
    }
  }
}
