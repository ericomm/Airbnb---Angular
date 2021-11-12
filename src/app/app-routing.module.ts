import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeHostComponent } from './be-host/be-host.component';

import { HomePageComponent } from './home-page/home-page.component';
import { ListHotelsComponent } from './list-hotels/list-hotels.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'lista', component: ListHotelsComponent },
  { path: 'anfitriao', component: BeHostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
