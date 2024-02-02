import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private baseUrl = 'assets/';

  constructor(private http: HttpClient) { }
  getShipments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}shipment-list.json`);
  }
  getShipmentDetails(shipmentId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}shipment-details.json`);
  }
  filterData(searchTerm: string, originalData: any): Observable<any[]> {
    let data = originalData[0].value.Shipment;
    if (searchTerm.trim() === '') {
      return of(originalData);
    } else {
      originalData[0].value.Shipment= originalData[0].value.Shipment.filter((shipment: any) => {
        return shipment.OrderNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          shipment.AssignedToUserId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          shipment.Status.toLowerCase().includes(searchTerm.toLowerCase()) ||
          shipment.BillToAddress.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          shipment.BillToAddress.LastName.toLowerCase().includes(searchTerm.toLowerCase());
      });
     return of(originalData);
    }
  }
}
