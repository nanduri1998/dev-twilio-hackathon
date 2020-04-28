import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  phone: number;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.router.navigate(['/dashbaord']);
    }
  }

  login() {
    this.loginService.postPhone(this.phone).subscribe((data) => {
      console.log(data);
      if (data.flow === 'login') {
        this.router.navigate(['/verify', data.flow, data.authyid]);
      } else {
        this.router.navigate(['/verify', data.flow, data.final.authyid]);
      }
    });
  }

}
