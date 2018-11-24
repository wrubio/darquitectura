import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SytSprint04Component } from './syt-sprint04.component';

describe('SytSprint04Component', () => {
  let component: SytSprint04Component;
  let fixture: ComponentFixture<SytSprint04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SytSprint04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SytSprint04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
