import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViumComponent } from './vium.component';

describe('ViumComponent', () => {
  let component: ViumComponent;
  let fixture: ComponentFixture<ViumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
