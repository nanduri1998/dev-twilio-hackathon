import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-one-more-step',
  templateUrl: './one-more-step.component.html',
  styleUrls: ['./one-more-step.component.css']
})
export class OneMoreStepComponent implements OnInit {
  clicked = false;
  clicklat;
  clicklng;
  constructor(private dashboardService: DashboardService, private http: HttpClient,
              private router: Router, private route: ActivatedRoute) { }
  userlat;
  userlng;
  storeId;
  ngOnInit() {
    this.storeId = this.route.snapshot.paramMap.get('storeid');
    this.dashboardService.getLocation().subscribe(data => {
      this.userlat = data.latitude;
      this.userlng = data.longitude;
    });
  }

  getLatLng(event) {
    console.log(event);
    this.clicked = true;
    this.clicklat = event.coords.lat;
    this.clicklng = event.coords.lng;
  }

  updateLatLng() {
    this.http.post<any>('https://dev-twilio-hackathon.herokuapp.com/set-lat-lng', {
      store_id: this.storeId,
      lat: this.clicklat,
      lng: this.clicklng
    }).subscribe(data => {
      if (data.status) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
