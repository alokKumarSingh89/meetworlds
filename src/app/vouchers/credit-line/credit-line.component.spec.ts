import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditLineComponent } from './credit-line.component';

describe('CreditLineComponent', () => {
  let component: CreditLineComponent;
  let fixture: ComponentFixture<CreditLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
