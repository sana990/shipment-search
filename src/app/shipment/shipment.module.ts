import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsScreenComponent } from './results-screen/results-screen.component';
import { DetailsScreenComponent } from './details-screen/details-screen.component';
import { ShipmentComponent } from './shipment.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ResultsScreenComponent,
    DetailsScreenComponent,
    ShipmentComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule
  ],
  exports:[
    ResultsScreenComponent,
    DetailsScreenComponent
  ]
})
export class ShipmentModule { }
