import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentSearchScreenComponent } from './shipment-search-screen/shipment-search-screen.component';
import { HomeComponent } from './home.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 



@NgModule({
  declarations: [
    ShipmentSearchScreenComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule
    
  ],
  exports:[
    ShipmentSearchScreenComponent
  ]
})
export class HomeModule { }
