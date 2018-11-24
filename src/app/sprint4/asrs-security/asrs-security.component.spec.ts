import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsrsSecurityComponent } from './asrs-security.component';

describe('AsrsSecurityComponent', () => {
  let component: AsrsSecurityComponent;
  let fixture: ComponentFixture<AsrsSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsrsSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsrsSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
