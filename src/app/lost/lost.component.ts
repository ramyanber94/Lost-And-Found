import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

export interface IAlert {
  id: number;
  type: string;
  strong?: string;
  message: string;
  icon?: string;
}
@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.scss']
})
export class LostComponent implements OnInit {
  focus?: any;
  focus1?: any;
  focus5?: any;
  showNational: boolean = false
  showBank: boolean = false
  isChecked?: boolean;
  value: number = 0;
  lostForm = new FormGroup({
    'fullName': new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    'nationalCardNo': new FormControl(''),
    'bankCardNo': new FormControl('')
  })

  status: boolean = false
  public alerts: Array<IAlert> = [];

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(): void { }

  checkCheckBoxvalue(event: any): void {
    this.showNational = event.target.checked
    if (!!this.showNational) {
      this.lostForm.get('nationalCardNo')?.setValidators(Validators.required);
    } else {
      this.lostForm.get('nationalCardNo')?.setValidators(null);
    }
  }

  checkCheckBoxBank(event: any): void {
    this.showBank = event.target.checked
    if (this.showBank) {
      this.lostForm.get('bankCardNo')?.setValidators(Validators.required);
    } else {
      this.lostForm.get('bankCardNo')?.setValidators([]);
    }
  }

  fullNameChange(event: any): void {
    if (event.target.value.length > 0) {
      this.value += 30;
    } else {
      this.value -= 30;
    }
  }

  nationalCardChange(event: any): void {
    if (event.target.value.length > 0) {
      this.value += 30;
    } else {
      this.value -= 30;
    }
  }

  bankInputChange(event: any): void {
    if (event.target.value.length > 0) {
      this.value += 40;
    } else {
      this.value -= 40;
    }
  }

  onFormSubmit(): void {
    if (this.lostForm.valid) {
      this.http.userLost(this.lostForm.value).subscribe((result: any) => {
        if (result.response === "success") {
          this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Success!',
            message: 'Your form submitted successfuly',
            icon: 'fa fa-thumbs-o-up'
          })
          this.status = true;
        }

      })
    }
  }
  close(alert: IAlert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
