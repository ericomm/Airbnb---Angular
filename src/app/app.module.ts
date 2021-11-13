import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListHotelsComponent } from './list-hotels/list-hotels.component';
import { BeHostComponent } from './be-host/be-host.component';
import { FormsModule } from '@angular/forms';
import { FootbarComponent } from './footbar/footbar.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, NavbarComponent, ListHotelsComponent,
  BeHostComponent, FootbarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
