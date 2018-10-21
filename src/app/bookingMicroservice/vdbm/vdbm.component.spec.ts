import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdbmComponent } from './vdbm.component';

describe('VdbmComponent', () => {
  let component: VdbmComponent;
  let fixture: ComponentFixture<VdbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
