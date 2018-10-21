import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdumComponent } from './vdum.component';

describe('VdumComponent', () => {
  let component: VdumComponent;
  let fixture: ComponentFixture<VdumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
