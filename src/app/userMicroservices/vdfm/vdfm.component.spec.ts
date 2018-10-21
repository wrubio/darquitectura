import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdfmComponent } from './vdfm.component';

describe('VdfmComponent', () => {
  let component: VdfmComponent;
  let fixture: ComponentFixture<VdfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
