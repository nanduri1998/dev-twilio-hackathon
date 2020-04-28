import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerifyotpService {

  constructor(private http: HttpClient) { }

  verify(authyid, flow, otp) {
    return this.http.post<any>('https://dev-twilio-hackathon.herokuapp.com/verifyotp', {authyid, flow, otp});
  }

  requestJWT(authyid) {
    return this.http.post<any>('https://dev-twilio-hackathon.herokuapp.com/requestjwt', {authyid});
  }
}
