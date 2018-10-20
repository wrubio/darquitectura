import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DexSprint1Component } from './dex-sprint1.component';

describe('DexSprint1Component', () => {
  let component: DexSprint1Component;
  let fixture: ComponentFixture<DexSprint1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexSprint1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexSprint1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
