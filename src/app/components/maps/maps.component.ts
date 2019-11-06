import { Component, OnInit } from '@angular/core';
import { CoordinateService } from  '../../shared/coordinate.service';
import { Coordinate } from '../../shared/coordinate.model';
import { environment } from '../../../environments/environment';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import * as io from 'socket.io-client';

declare var M: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  providers: [CoordinateService]
})
export class MapsComponent implements OnInit {
  public text : string = 'Mapa de Eventos Registrados ';
  public lat: number = -33.4368808;
  public lng: number = -70.6894724;
  public zoom: number = 15;
  public data: any;

  public myControl = new FormControl();
  public options: any = [];
  filteredOptions: Observable<string[]>;

  private socket;
  constructor(public coordinateService: CoordinateService) {
    this.socket = io(environment.apiUrl);
  }

  ngOnInit() {
    this.getCoordinates();
    this.setKeyword();
    this.socket.on('Coordinate', () => {
      this.getCoordinates();
      this.setKeyword();
    })
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  public getCoordinates(){
    this.coordinateService.getCoordinate().subscribe((res) => {
      this.coordinateService.coordinates = res as Coordinate[];
    });
  }

  public setKeyword() {
    this.coordinateService.getAllCoordinate().subscribe((res) => {
      this.data = res
      this.options.length = 0;
      this.data.map((res)=>{ this.options.push(res['description']) });
    });
  }

  public searchCoordinates(filter){
    this.coordinateService.searchCoordinate(filter).subscribe((res) => {
      (res != 'No se encontro resultados') ? this.coordinateService.coordinates = res as Coordinate[] : M.toast({ html: 'No se encontraron eventos', classes: 'rounded' });
    });
  }

}
