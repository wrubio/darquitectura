import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SytSprint1Component } from './syt-sprint1.component';

describe('SytSprint1Component', () => {
  let component: SytSprint1Component;
  let fixture: ComponentFixture<SytSprint1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SytSprint1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SytSprint1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
