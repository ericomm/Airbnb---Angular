import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccommodationsListComponent } from './accommodations-list/accommodations-list.component';
import { BeHostComponent } from './be-host/be-host.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FootbarComponent } from './footbar/footbar.component';
import { AccommodationDetailsComponent } from './accommodation-details/accommodation-details.component';
import { RegisterInterestComponent } from './register-interest/register-interest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    AccommodationsListComponent,
    BeHostComponent,
    FootbarComponent,
    AccommodationDetailsComponent,
    RegisterInterestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
