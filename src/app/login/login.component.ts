import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstname: string;
  lastname: string;
  age: number;
  authyid: string;
  constructor(private detailsService: DetailsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.authyid = this.route.snapshot.paramMap.get('id');
  }

  register() {
    this.detailsService.postDetails(this.firstname, this.lastname, this.age, this.authyid).subscribe(data => {
      sessionStorage.setItem('token', data.jwt);
      sessionStorage.setItem('authyid', data.authyid);
      this.router.navigate(['/dashboard']);
    });
  }

}
