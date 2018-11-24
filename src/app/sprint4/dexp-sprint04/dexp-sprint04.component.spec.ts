import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DexpSprint04Component } from './dexp-sprint04.component';

describe('DexpSprint04Component', () => {
  let component: DexpSprint04Component;
  let fixture: ComponentFixture<DexpSprint04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexpSprint04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexpSprint04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
