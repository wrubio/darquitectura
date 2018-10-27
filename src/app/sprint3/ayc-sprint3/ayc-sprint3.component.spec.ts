import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AycSprint3Component } from './ayc-sprint3.component';

describe('AycSprint3Component', () => {
  let component: AycSprint3Component;
  let fixture: ComponentFixture<AycSprint3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AycSprint3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AycSprint3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
