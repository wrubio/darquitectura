import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SytSprint2Component } from './syt-sprint2.component';

describe('SytSprint2Component', () => {
  let component: SytSprint2Component;
  let fixture: ComponentFixture<SytSprint2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SytSprint2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SytSprint2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
