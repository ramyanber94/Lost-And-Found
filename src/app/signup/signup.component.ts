import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

export interface IAlert {
    id: number;
    type: string;
    strong?: string;
    message: string;
    icon?: string;
}

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    focus?: any;
    focus1?: any;
    focus2?: any;
    weak: boolean = false
    normal: boolean = false
    strong: boolean = false
    regForm = new FormGroup({
        'name': new FormControl('', [
            Validators.required,
            Validators.minLength(2)
        ]),
        'phoneNumber': new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
        'email': new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        'password': new FormControl('', Validators.required),
    })
    passwordError: boolean = false;
    public alerts: Array<IAlert> = [];
    constructor(private http: HttpService, private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
    }

    onPasswordChange(event: any): void {
        if (undefined !== event.target.value && event.target.value.length <= 8) {
            this.weak = true;
            this.normal = false;
            this.strong = false;
        }
        if (undefined !== event.target.value && event.target.value.length === 8 && event.target.value.length < 11 && this.checkPassword(event.target.value)) {
            this.normal = true;
            this.weak = false;
            this.strong = false;
        }
        if (undefined !== event.target.value && event.target.value.length > 12 && this.checkPassword(event.target.value)) {
            this.strong = true;
            this.weak = false;
            this.normal = false;
        }
    }

    onFormSubmit(): void {
        if (this.regForm.valid) {
            if (this.checkPassword(this.regForm.controls['password'].value)) {
                this.http.register(this.regForm.value).subscribe((result: any) => {
                    if (result.response !== "failed") {
                        localStorage.setItem('id', result.response)
                        this.router.navigate(['/home']);
                    } else {
                        this.router.navigate(['/']);
                    }
                })
            } else {
                this.alerts.push({
                    id: 3,
                    type: 'warning',
                    strong: 'Warning!',
                    message: 'Password must be At least 8 characters, one Lowercase letter, one Uppercase letter, Numbers, and Special characters!',
                    icon: 'ni ni-bell-55'
                })
                this.passwordError = true;
            }
        }
    }

    checkPassword(str: string): boolean {

        var re = /^(?=.*\d)(?=.*[!@-_#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(str);
    }
    close(alert: IAlert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }

}
