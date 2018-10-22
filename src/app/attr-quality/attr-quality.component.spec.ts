import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrQualityComponent } from './attr-quality.component';

describe('AttrQualityComponent', () => {
  let component: AttrQualityComponent;
  let fixture: ComponentFixture<AttrQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
