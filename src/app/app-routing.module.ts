import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoordinateComponent } from './components/coordinate/coordinate.component';
import { MapsComponent } from './components/maps/maps.component';

const routes: Routes = [
  { path: '', component: CoordinateComponent },
  { path: 'maps', component: MapsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}