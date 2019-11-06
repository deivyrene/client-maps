import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoordinateComponent } from './components/coordinate/coordinate.component';
import { MapsComponent } from './components/maps/maps.component';
import { AppRoutingModule } from './app-routing.module';

import { AgmCoreModule } from '@agm/core';
import { ListComponent } from './components/coordinate/list/list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SocketService } from './shared/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    CoordinateComponent,
    MapsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaXOxBSoefofM-yjMqTPbrJT-qaAoN4GA'
    })
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
