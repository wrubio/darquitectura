import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsrPriorityComponent } from './asr-priority.component';

describe('AsrPriorityComponent', () => {
  let component: AsrPriorityComponent;
  let fixture: ComponentFixture<AsrPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsrPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsrPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
