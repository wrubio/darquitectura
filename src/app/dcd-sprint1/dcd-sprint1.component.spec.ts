import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcdSprint1Component } from './dcd-sprint1.component';

describe('DcdSprint1Component', () => {
  let component: DcdSprint1Component;
  let fixture: ComponentFixture<DcdSprint1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcdSprint1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcdSprint1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
