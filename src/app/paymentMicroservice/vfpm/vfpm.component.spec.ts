import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VfpmComponent } from './vfpm.component';

describe('VfpmComponent', () => {
  let component: VfpmComponent;
  let fixture: ComponentFixture<VfpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VfpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VfpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
