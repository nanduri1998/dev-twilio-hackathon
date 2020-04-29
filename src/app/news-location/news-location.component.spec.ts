import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLocationComponent } from './news-location.component';

describe('NewsLocationComponent', () => {
  let component: NewsLocationComponent;
  let fixture: ComponentFixture<NewsLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
