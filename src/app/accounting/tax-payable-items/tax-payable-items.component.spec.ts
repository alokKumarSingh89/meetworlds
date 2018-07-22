import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxPayableItemsComponent } from './tax-payable-items.component';

describe('TaxPayableItemsComponent', () => {
  let component: TaxPayableItemsComponent;
  let fixture: ComponentFixture<TaxPayableItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxPayableItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxPayableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
