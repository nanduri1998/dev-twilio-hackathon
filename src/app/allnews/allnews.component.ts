import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.component.html',
  styleUrls: ['./allnews.component.css']
})
export class AllnewsComponent implements OnInit {
  finalArray = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<any>('http://newsapi.org/v2/top-headlines?country=in&apiKey=60783bce2ea24dbba74b394fc8b41c26').subscribe(data => {
      console.log(data);
      this.finalArray = data.articles;
    });
  }

  back() {
    this.router.navigate(['/dashboard']);
  }

}
