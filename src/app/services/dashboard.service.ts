import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<any>('http://ip-api.com/json');
  }

  getWeather(city) {
    return this.http.get<any>('http://api.openweathermap.org/data/2.5/weather?appid=8598c1b0b4e91b68974101d97a10552b&q=' + city);
  }
}
