import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {
  store = {
    name: '',
    type: '',
    opening: '',
    closing: ''
  };
  authyid;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.authyid = sessionStorage.getItem('authyid');
    console.log(this.authyid);
    this.http.get<any>('https://dev-twilio-hackathon.herokuapp.com/check_store/' + this.authyid).subscribe(data => {
      if (data.status) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  create() {
    this.http.post<any>('https://dev-twilio-hackathon.herokuapp.com/create-store', {
      authyid: this.authyid,
      store_name: this.store.name,
      store_type: this.store.type,
      opening_time: this.store.opening,
      closing_time: this.store.closing
    }).subscribe(data => {
      if (data.status) {
        this.router.navigate(['/one-more-step', data.store_id]);
      }
    });
  }

}
