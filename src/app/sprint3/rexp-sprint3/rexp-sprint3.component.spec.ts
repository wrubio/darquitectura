import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RexpSprint3Component } from './rexp-sprint3.component';

describe('RexpSprint3Component', () => {
  let component: RexpSprint3Component;
  let fixture: ComponentFixture<RexpSprint3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RexpSprint3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RexpSprint3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
