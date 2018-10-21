import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Retro1Component } from './retro1.component';

describe('Retro1Component', () => {
  let component: Retro1Component;
  let fixture: ComponentFixture<Retro1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Retro1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Retro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
