import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ShipmentModule } from './shipment/shipment.module';
import { ShipmentService } from './services/shipment.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ShipmentModule,
    HttpClientModule ,
    FormsModule
    
  ],
  providers: [ShipmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
