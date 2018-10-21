import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsrcComponent } from './asrc.component';

describe('AsrcComponent', () => {
  let component: AsrcComponent;
  let fixture: ComponentFixture<AsrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
