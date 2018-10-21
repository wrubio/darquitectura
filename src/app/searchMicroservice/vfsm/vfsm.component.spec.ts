import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VfsmComponent } from './vfsm.component';

describe('VfsmComponent', () => {
  let component: VfsmComponent;
  let fixture: ComponentFixture<VfsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VfsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VfsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
