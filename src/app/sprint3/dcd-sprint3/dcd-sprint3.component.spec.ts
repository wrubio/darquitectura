import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcdSprint3Component } from './dcd-sprint3.component';

describe('DcdSprint3Component', () => {
  let component: DcdSprint3Component;
  let fixture: ComponentFixture<DcdSprint3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcdSprint3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcdSprint3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
