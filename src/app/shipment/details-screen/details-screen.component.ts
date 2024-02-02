import { Component, OnInit } from '@angular/core';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-details-screen',
  templateUrl: './details-screen.component.html',
  styleUrls: ['./details-screen.component.css']
})
export class DetailsScreenComponent implements  OnInit {
  shipments!: string 
  data: any[] = [];

  constructor(private shipmentservice:ShipmentService){}
  ngOnInit(): void {
    this.shipmentservice.getShipmentDetails(this.shipments).subscribe(
      (data: any) => {
        console.log('Shipments data details :', data); 
        // Check if the data is an object before assigning it
        if (typeof data === 'object' && !Array.isArray(data)) {
          // Convert the object to an array of key-value pairs
          this.data = Object.entries(data).map(([key, value]) => ({ key, value }));
          const typeshipment = typeof this.data
          console.log('Shipments datadetails:', this.data);
          console.log('Shipments typee of:', typeshipment); 
        } else {
          console.error('Invalid data format for shipments:', data);
        }
      },
      error => {
        console.error('Error fetching shipments:', error);
      }
    );
  }

}
