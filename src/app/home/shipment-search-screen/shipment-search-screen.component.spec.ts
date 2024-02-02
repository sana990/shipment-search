import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentSearchScreenComponent } from './shipment-search-screen.component';

describe('ShipmentSearchScreenComponent', () => {
  let component: ShipmentSearchScreenComponent;
  let fixture: ComponentFixture<ShipmentSearchScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentSearchScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentSearchScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
