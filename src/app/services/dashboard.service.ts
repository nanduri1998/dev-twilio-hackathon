import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<any>('https://ipapi.co/json/');
  }

  getWeather(city) {
    return this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?appid=8598c1b0b4e91b68974101d97a10552b&q=' + city);
  }

  getdataSummary() {
    return this.http.get<any>('https://api.rootnet.in/covid19-in/stats/latest');
  }

  getemergencynumber() {
    return this.http.get<any>('https://api.rootnet.in/covid19-in/contacts');
  }
}
