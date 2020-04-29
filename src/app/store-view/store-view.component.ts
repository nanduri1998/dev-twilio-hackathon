import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent implements OnInit {
  userlat;
  userlng;
  stores = [];
  constructor(private dashboardService: DashboardService, private http: HttpClient,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dashboardService.getLocation().subscribe(data => {
      this.userlat = data.latitude;
      this.userlng = data.longitude;
    });

    this.http.get<any>('https://dev-twilio-hackathon.herokuapp.com/list_stores').subscribe(data => {
      console.log(data);
      this.stores = data;
    });
  }

  call(authyid) {
    this.http.get<any>('https://dev-twilio-hackathon.herokuapp.com/calldirect/' + authyid).subscribe(data => {
      window.location.href = 'tel:+91' + data.phone;
    });
  }

  sms(storeid) {
    this.router.navigate(['sms', storeid]);
  }

}
