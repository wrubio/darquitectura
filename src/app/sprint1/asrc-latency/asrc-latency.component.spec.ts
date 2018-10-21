import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsrcLatencyComponent } from './asrc-latency.component';

describe('AsrcLatencyComponent', () => {
  let component: AsrcLatencyComponent;
  let fixture: ComponentFixture<AsrcLatencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsrcLatencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsrcLatencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
