import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DexpSprint2Component } from './dexp-sprint2.component';

describe('DexpSprint2Component', () => {
  let component: DexpSprint2Component;
  let fixture: ComponentFixture<DexpSprint2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexpSprint2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexpSprint2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
