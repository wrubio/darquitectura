import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VfbmComponent } from './vfbm.component';

describe('VfbmComponent', () => {
  let component: VfbmComponent;
  let fixture: ComponentFixture<VfbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VfbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VfbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
