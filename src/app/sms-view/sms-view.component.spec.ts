import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsViewComponent } from './sms-view.component';

describe('SmsViewComponent', () => {
  let component: SmsViewComponent;
  let fixture: ComponentFixture<SmsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
