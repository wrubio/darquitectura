import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarqSecurityComponent } from './darq-security.component';

describe('DarqSecurityComponent', () => {
  let component: DarqSecurityComponent;
  let fixture: ComponentFixture<DarqSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarqSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarqSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
