import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RycSprint1Component } from './ryc-sprint1.component';

describe('RycSprint1Component', () => {
  let component: RycSprint1Component;
  let fixture: ComponentFixture<RycSprint1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RycSprint1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RycSprint1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
