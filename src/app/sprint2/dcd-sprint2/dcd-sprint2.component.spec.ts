import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcdSprint2Component } from './dcd-sprint2.component';

describe('DcdSprint2Component', () => {
  let component: DcdSprint2Component;
  let fixture: ComponentFixture<DcdSprint2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcdSprint2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcdSprint2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
