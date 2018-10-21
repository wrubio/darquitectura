import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcontexComponent } from './vcontex.component';

describe('VcontexComponent', () => {
  let component: VcontexComponent;
  let fixture: ComponentFixture<VcontexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcontexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcontexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
