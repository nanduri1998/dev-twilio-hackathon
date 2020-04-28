import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  postDetails(firstName, lastName, age, authyid) {
    return this.http.post<any>('https://dev-twilio-hackathon.herokuapp.com/details', {
      first_name: firstName,
      last_name: lastName,
      age, authyid
    });
  }
}
