import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoordinateComponent } from './components/coordinate/coordinate.component';
import { MapsComponent } from './components/maps/maps.component';
import { ListComponent } from './components/coordinate/list/list.component'

const routes: Routes = [
  { path: '', component: CoordinateComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}