import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  location;
  total;
  totalDeaths;
  totalDischarged;
  notAvailable = '';
  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit() {
    this.dashboardService.getdataSummary().subscribe(data => {
      this.location = 'India';
      this.total = data.data.summary.total;
      this.totalDeaths = data.data.summary.deaths;
      this.totalDischarged = data.data.summary.discharged;
    });
  }

  getCases(state) {
    if (state === 'India') {
      this.notAvailable = 'Stats not available for your state';
    } else {
      this.notAvailable = '';
      this.dashboardService.getdataSummary().subscribe(data => {
        data.data.regional.forEach(stateindata => {
          if (state === stateindata.loc) {
            this.location = stateindata.loc;
            this.total = stateindata.totalConfirmed;
            this.totalDeaths = stateindata.deaths;
            this.totalDischarged = stateindata.discharged;
          }
        });
      });
    }
  }

  back() {
    this.router.navigate(['/dashboard']);
  }

}
