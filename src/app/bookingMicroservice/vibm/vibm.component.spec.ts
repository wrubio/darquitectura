import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VibmComponent } from './vibm.component';

describe('VibmComponent', () => {
  let component: VibmComponent;
  let fixture: ComponentFixture<VibmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VibmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VibmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
