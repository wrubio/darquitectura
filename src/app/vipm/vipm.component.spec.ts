import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipmComponent } from './vipm.component';

describe('VipmComponent', () => {
  let component: VipmComponent;
  let fixture: ComponentFixture<VipmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
