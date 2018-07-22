import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchagesComponent } from './purchages.component';

describe('PurchagesComponent', () => {
  let component: PurchagesComponent;
  let fixture: ComponentFixture<PurchagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
