import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsrcDisponibilityComponent } from './asrc-disponibility.component';

describe('AsrcDisponibilityComponent', () => {
  let component: AsrcDisponibilityComponent;
  let fixture: ComponentFixture<AsrcDisponibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsrcDisponibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsrcDisponibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
