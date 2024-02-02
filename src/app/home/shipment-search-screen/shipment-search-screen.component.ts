import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-search-screen',
  templateUrl: './shipment-search-screen.component.html',
  styleUrls: ['./shipment-search-screen.component.css']
})
export class ShipmentSearchScreenComponent {
  constructor(private router: Router){}
  onsearch():void{
    this.router.navigate(['/shipment/results']);
  }
  
}
