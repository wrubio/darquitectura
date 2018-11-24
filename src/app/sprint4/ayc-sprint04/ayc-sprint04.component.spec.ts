import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AycSprint04Component } from './ayc-sprint04.component';

describe('AycSprint04Component', () => {
  let component: AycSprint04Component;
  let fixture: ComponentFixture<AycSprint04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AycSprint04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AycSprint04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
