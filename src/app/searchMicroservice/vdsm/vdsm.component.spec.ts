import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdsmComponent } from './vdsm.component';

describe('VdsmComponent', () => {
  let component: VdsmComponent;
  let fixture: ComponentFixture<VdsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
