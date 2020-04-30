import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {
  hotspots = [];
  places = {
    lat: 0,
    lng: 0
  };
  hotspot = false;
  state = '';
  district = '';
  constructor(private router: Router, private dashboardService: DashboardService, private http: HttpClient) { }

  ngOnInit() {
    this.dashboardService.getLocation().subscribe(data => {
      console.log(data);
      this.places.lat = data.latitude;
      this.places.lng = data.longitude;
      this.state = data.region;
      this.district = data.city;

      this.http.get<any>('https://dev-twilio-hackathon.herokuapp.com/gethotspot').subscribe(data1 => {
      this.hotspots = data1;
      data1.forEach(area => {
        if (area.state === this.state || area.district === this.district) {
          this.hotspot = true;
        }
      });
    });
    });
  }

  back() {
    this.router.navigate(['/dashboard']);
  }


}
