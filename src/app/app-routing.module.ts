import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsScreenComponent } from './shipment/results-screen/results-screen.component';
import { DetailsScreenComponent } from './shipment/details-screen/details-screen.component';
import { HomeComponent } from './home/home.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShipmentSearchScreenComponent } from './home/shipment-search-screen/shipment-search-screen.component';

const routes: Routes = [
{ path: '', redirectTo: '/home/searching', pathMatch: 'full' },
{path:'home',component:HomeComponent , children:[
{path:'searching',component:ShipmentSearchScreenComponent}
]},
{path:'shipment',component:ShipmentComponent,children:[
  {path:'results',component:ResultsScreenComponent},
  {path:'details/:id',component:DetailsScreenComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
