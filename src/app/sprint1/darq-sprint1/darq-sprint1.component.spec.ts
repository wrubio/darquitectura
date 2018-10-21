import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarqSprint1Component } from './darq-sprint1.component';

describe('DarqSprint1Component', () => {
  let component: DarqSprint1Component;
  let fixture: ComponentFixture<DarqSprint1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarqSprint1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarqSprint1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
