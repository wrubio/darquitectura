import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Retro0Component } from './retro0.component';

describe('Retro0Component', () => {
  let component: Retro0Component;
  let fixture: ComponentFixture<Retro0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Retro0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Retro0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
