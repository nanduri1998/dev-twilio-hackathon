import { Component, OnInit } from '@angular/core';
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
  constructor(private dashboard: DashboardService, private router: Router) {
    setInterval(() => {
      this.time = new Date();
    }, 1);
  }

  ngOnInit() {
    this.dashboard.getLocation().subscribe(data => {
      console.log(data);
      if (data.status === 'success') {
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
}
