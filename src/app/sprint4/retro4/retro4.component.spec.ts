import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Retro4Component } from './retro4.component';

describe('Retro4Component', () => {
  let component: Retro4Component;
  let fixture: ComponentFixture<Retro4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Retro4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Retro4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
