import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyotpService } from '../services/verifyotp.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  flow: string;
  otp = {
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: ''
  };
  message = '';
  authyid: string;
  constructor(private verify: VerifyotpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.flow = this.route.snapshot.paramMap.get('flow');
    this.authyid = this.route.snapshot.paramMap.get('id');
  }

  submit() {
    const finalOtp = this.otp.one + '' + this.otp.two + '' + this.otp.three + '' + this.otp.four + '' + this.otp.five + '' + this.otp.six;
    console.log(finalOtp);
    this.verify.verify(this.authyid, this.flow, finalOtp).subscribe(data => {
      if (data.results.success) {
        if (data.flow === 'login') {
          this.verify.requestJWT(this.authyid).subscribe(data1 => {
            sessionStorage.setItem('token', data1.jwt);
            sessionStorage.setItem('authyid', data1.authyid);
            this.router.navigate(['/dashboard']);
          });
        } else if (data.flow === 'register') {
          this.router.navigate(['/login', this.authyid]);
        }
      } else {
        this.message = 'Please retry OTP';
      }
    });
  }

  keytab(event, i) {
    console.log(event);
    const nextInput = event.srcElement.form[i];

    const target = event.target || event.srcElement;
    const id = target.id;

    if (nextInput == null) {  // check the maxLength from here
      return;
    } else {
      nextInput.focus();
    }
}
}
