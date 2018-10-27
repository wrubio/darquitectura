import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarqSprint3Component } from './darq-sprint3.component';

describe('DarqSprint3Component', () => {
  let component: DarqSprint3Component;
  let fixture: ComponentFixture<DarqSprint3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarqSprint3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarqSprint3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
