import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcdSprint04Component } from './dcd-sprint04.component';

describe('DcdSprint04Component', () => {
  let component: DcdSprint04Component;
  let fixture: ComponentFixture<DcdSprint04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcdSprint04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcdSprint04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
