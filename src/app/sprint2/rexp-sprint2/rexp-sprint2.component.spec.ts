import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RexpSprint2Component } from './rexp-sprint2.component';

describe('RexpSprint2Component', () => {
  let component: RexpSprint2Component;
  let fixture: ComponentFixture<RexpSprint2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RexpSprint2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RexpSprint2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
