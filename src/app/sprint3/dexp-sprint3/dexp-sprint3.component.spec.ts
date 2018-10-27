import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DexpSprint3Component } from './dexp-sprint3.component';

describe('DexpSprint3Component', () => {
  let component: DexpSprint3Component;
  let fixture: ComponentFixture<DexpSprint3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexpSprint3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexpSprint3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
