import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdpmComponent } from './vdpm.component';

describe('VdpmComponent', () => {
  let component: VdpmComponent;
  let fixture: ComponentFixture<VdpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
