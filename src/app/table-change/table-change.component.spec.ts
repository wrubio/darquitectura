import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChangeComponent } from './table-change.component';

describe('TableChangeComponent', () => {
  let component: TableChangeComponent;
  let fixture: ComponentFixture<TableChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
