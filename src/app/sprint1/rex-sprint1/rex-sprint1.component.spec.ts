import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RexSprint1Component } from './rex-sprint1.component';

describe('RexSprint1Component', () => {
  let component: RexSprint1Component;
  let fixture: ComponentFixture<RexSprint1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RexSprint1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RexSprint1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
