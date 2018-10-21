import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarqSprint2Component } from './darq-sprint2.component';

describe('DarqSprint2Component', () => {
  let component: DarqSprint2Component;
  let fixture: ComponentFixture<DarqSprint2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarqSprint2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarqSprint2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
