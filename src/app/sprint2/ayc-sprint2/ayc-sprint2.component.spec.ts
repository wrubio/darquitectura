import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AycSprint2Component } from './ayc-sprint2.component';

describe('AycSprint2Component', () => {
  let component: AycSprint2Component;
  let fixture: ComponentFixture<AycSprint2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AycSprint2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AycSprint2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
