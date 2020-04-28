import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postPhone(phone: number) {
    return this.http.post<any>('https://dev-twilio-hackathon.herokuapp.com/login', {phone});
  }
}
