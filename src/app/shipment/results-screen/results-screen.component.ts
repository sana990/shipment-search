import { Component, OnInit } from '@angular/core';
import { ShipmentService } from 'src/app/services/shipment.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-results-screen',
  templateUrl: './results-screen.component.html',
  styleUrls: ['./results-screen.component.css']
})
export class ResultsScreenComponent implements OnInit  {
 data: any[] = [];
 filteredData: any = [];
 searchTerm:any;
constructor(private shipmentService: ShipmentService,private router: Router){}
  ngOnInit(): void {
    this.shipmentService.getShipments().subscribe(
      (data: any) => {
        console.log('Shipments data:', data); 
        // Check if the data is an object before assigning it
        if (typeof data === 'object' && !Array.isArray(data)) {
          // Convert the object to an array of key-value pairs
          this.data = Object.entries(data).map(([key, value]) => ({ key, value }));
          this.filteredData = this.data;
          const typeshipment = typeof this.data
          console.log('Shipments data:', this.data);
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
  viewDetails(shipmentId: string): void {
    this.router.navigate(['/shipment/details', shipmentId]);
    console.log("id is"+shipmentId)
  }
  filterData() {
    console.log("I am filter data ",this.data)
    this.shipmentService.filterData(this.searchTerm, this.data).subscribe(filteredData => {
      console.log("clickred sana ")
      this.filteredData = filteredData;
      
    });
  }
}
