import { Component, OnInit } from '@angular/core';
import { CoordinateService } from  '../../shared/coordinate.service';
import { Coordinate } from '../../shared/coordinate.model';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  providers: [CoordinateService]
})
export class MapsComponent implements OnInit {
  texto : string = 'Mapa de Eventos Registrados ';
  lat: number = -33.447487;
  lng: number = -70.673676;
  zoom: number = 15;

  constructor(public coordinateService: CoordinateService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(){
    this.coordinateService.getCoordinate().subscribe((res) => {
      this.coordinateService.coordinates = res as Coordinate[];
    });
  }

}
