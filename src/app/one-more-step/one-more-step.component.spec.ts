import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMoreStepComponent } from './one-more-step.component';

describe('OneMoreStepComponent', () => {
  let component: OneMoreStepComponent;
  let fixture: ComponentFixture<OneMoreStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneMoreStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMoreStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
