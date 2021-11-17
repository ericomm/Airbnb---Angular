import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeHostComponent } from './be-host/be-host.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccommodationDetailsComponent } from './accommodation-details/accommodation-details.component';
import { AccommodationsListComponent } from './accommodations-list/accommodations-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'lista', component: AccommodationsListComponent },
  { path: 'anfitriao', component: BeHostComponent },
  { path: 'detalhes/:id', component: AccommodationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
