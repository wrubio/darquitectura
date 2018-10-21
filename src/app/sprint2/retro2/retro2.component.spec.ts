import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Retro2Component } from './retro2.component';

describe('Retro2Component', () => {
  let component: Retro2Component;
  let fixture: ComponentFixture<Retro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Retro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Retro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
