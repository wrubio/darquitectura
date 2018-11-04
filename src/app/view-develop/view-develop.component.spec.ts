import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDevelopComponent } from './view-develop.component';

describe('ViewDevelopComponent', () => {
  let component: ViewDevelopComponent;
  let fixture: ComponentFixture<ViewDevelopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDevelopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
