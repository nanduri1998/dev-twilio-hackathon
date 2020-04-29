import { Component, OnInit, HostListener } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  temp: any;
  icon: any;
  descriptionWeather: any;
  city: any;
  time = new Date();
  totalcases = 0;
  totalrecovered = 0;
  // tslint:disable-next-line: variable-name
  total_active = 0;
  // tslint:disable-next-line: variable-name
  totalcases_state = 0;
  // tslint:disable-next-line: variable-name
  totaldeaths_state = 0;
  state = '';

  states = [
   'Andaman and Nicobar Islands',
   'Andhra Pradesh',
   'Arunachal Pradesh',
   'Assam',
   'Bihar',
   'Chandigarh',
   'Chhattisgarh',
   'Delhi',
   'Goa',
   'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan' ,
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal'

  ];
  constructor(private dashboard: DashboardService, private router: Router) {
    setInterval(() => {
      this.time = new Date();
    }, 1);
  }

  emergency() {

    this.dashboard.getemergencynumber().subscribe(data => {

      if (data.success === true) {
        const array = data.data.contacts.regional;
        array.forEach(element => {

          if (this.state === 'Telangana') {
            if (element.loc === 'Telengana') {
              window.location.href = 'tel:' + element.number;
            }
          } else if (element.loc === this.state) {
            window.location.href = 'tel:' + element.number;
          }

        });

      }

    });

  }
 getdatasummary(state) {
    this.dashboard.getdataSummary().subscribe(data => {

      if (data.success === true) {
        const val = this.states.indexOf(this.state);
        this.totalcases = data.data.summary.total;
        this.totalrecovered = data.data.summary.discharged;
        this.totalcases_state = data.data.regional[val].totalConfirmed;
        this.totaldeaths_state = data.data.regional[val].deaths;

      }

    });
    setInterval(() => {
    this.dashboard.getdataSummary().subscribe(data => {

      if (data.success === true) {
        const val = this.states.indexOf(this.state);
        this.totalcases = data.data.summary.total;
        this.totalrecovered = data.data.summary.discharged;
        this.totalcases_state = data.data.regional[val].totalConfirmed;
        this.totaldeaths_state = data.data.regional[val].deaths;

      }

    });
  }, 30000);
 }
  ngOnInit() {
    this.dashboard.getLocation().subscribe(data => {
      console.log(data);
      this.state = data.region;
      this.getdatasummary('none');
      console.log(this.state);
      if (data) {
        this.dashboard.getWeather(data.city).subscribe(data1 => {
          console.log(data1);
          this.temp = Math.floor(parseFloat(data1.main.temp) - 273.15);
          this.icon = 'https://openweathermap.org/img/wn/' + data1.weather[0].icon + '@2x.png';
          this.city = data1.name;
          this.descriptionWeather = String(data1.weather[0].description).toString().toUpperCase();
        });
      }
    });

  }


  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('authyid');
    this.router.navigate(['/register']);
  }

  medical() {
    this.router.navigate(['/medical']);
  }
  news() {
    this.router.navigate(['/allnews']);
  }

  stores() {
    this.router.navigate(['/store-view']);
  }
}
