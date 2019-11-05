import { Component, OnInit } from '@angular/core';
import { CoordinateService } from  '../../shared/coordinate.service';
import { Coordinate } from '../../shared/coordinate.model';
import { environment } from '../../../environments/environment';
import * as io from 'socket.io-client';

declare var M: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  providers: [CoordinateService]
})
export class MapsComponent implements OnInit {
  public texto : string = 'Mapa de Eventos Registrados ';
  public lat: number = -33.4368808;
  public lng: number = -70.6894724;
  public zoom: number = 15;

  private socket;
  constructor(public coordinateService: CoordinateService) {
    this.socket = io(environment.apiUrl);
  }

  ngOnInit() {
    this.getCoordinates();
    this.socket.on('Coordinate', () => {
      this.getCoordinates();
    })
  }

  getCoordinates(){
    this.coordinateService.getCoordinate().subscribe((res) => {
      this.coordinateService.coordinates = res as Coordinate[];
    });
  }

  searchCoordinates(filter){
    this.coordinateService.searchCoordinate(filter).subscribe((res) => {
      (res != 'No se encontro resultados') ? this.coordinateService.coordinates = res as Coordinate[] : M.toast({ html: 'No se encontraron eventos', classes: 'rounded' });
    });
  }

}
