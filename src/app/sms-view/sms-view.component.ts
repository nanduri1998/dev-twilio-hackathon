import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-view',
  templateUrl: './sms-view.component.html',
  styleUrls: ['./sms-view.component.css']
})
export class SmsViewComponent implements OnInit {
  places = {
    lat: 0,
    lng: 0
  };
  constructor() { }

  ngOnInit() {
  }

}
