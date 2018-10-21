import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VismComponent } from './vism.component';

describe('VismComponent', () => {
  let component: VismComponent;
  let fixture: ComponentFixture<VismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
