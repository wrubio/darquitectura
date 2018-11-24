import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RexpSprint04Component } from './rexp-sprint04.component';

describe('RexpSprint04Component', () => {
  let component: RexpSprint04Component;
  let fixture: ComponentFixture<RexpSprint04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RexpSprint04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RexpSprint04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
