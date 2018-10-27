import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Retro3Component } from './retro3.component';

describe('Retro3Component', () => {
  let component: Retro3Component;
  let fixture: ComponentFixture<Retro3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Retro3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Retro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
