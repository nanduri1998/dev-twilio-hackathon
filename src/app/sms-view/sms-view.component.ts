import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sms-view',
  templateUrl: './sms-view.component.html',
  styleUrls: ['./sms-view.component.css']
})
export class SmsViewComponent implements OnInit {
  places = {
    lat: 0,
    lng: 0
  };
  storeId;
  currentUserPhone;
  storePhone;
  q1;
  q2;
  authyid;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.storeId = this.route.snapshot.paramMap.get('storeid');
    this.authyid = localStorage.getItem('authyid');
    this.http.get<any>('https://dev-twilio-hackathon.herokuapp.com/list_store/' + this.storeId).subscribe(data => {
      this.places.lat = data.storeInfo[0].lat;
      this.places.lng = data.storeInfo[0].lng;
      this.storePhone = '+91' + data.personInfo[0].phone;
      console.log('Store: ', data);
    });

    this.http.get<any>('https://dev-twilio-hackathon.herokuapp.com/current_user/' + this.authyid).subscribe(data => {
      console.log('Current User: ', data);
      this.currentUserPhone = '+91' + data.phone;
    });
  }

  sendsms() {
    this.http.post<any>('https://dev-twilio-hackathon.herokuapp.com/sendsms', {
      phone: this.storePhone,
      q1: this.q1,
      q2: this.q2,
      user_phone: this.currentUserPhone
    }).subscribe(data => {
      if (data.status) {
        alert('SMS Sent');
        this.router.navigate(['/dashboard']);
      }
    });
  }

  back() {
    this.router.navigate(['/store-view']);
  }

}
