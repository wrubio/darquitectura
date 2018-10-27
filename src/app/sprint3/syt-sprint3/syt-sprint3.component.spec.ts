import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SytSprint3Component } from './syt-sprint3.component';

describe('SytSprint3Component', () => {
  let component: SytSprint3Component;
  let fixture: ComponentFixture<SytSprint3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SytSprint3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SytSprint3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
