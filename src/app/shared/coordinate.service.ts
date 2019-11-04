import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs';

import { Coordinate } from './coordinate.model';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {
  selectedCoordinate: Coordinate;
  coordinates: Coordinate[];

  constructor(private http: HttpClient) { }

  postCoordinate(data: Coordinate) {
    return this.http.post(environment.apiUrl + `/coordinates/create`, data);
  }

  getCoordinate() {
    return this.http.get(environment.apiUrl + `/coordinates/listAll`);
  }

  searchCoordinate(data) {
    return this.http.post(environment.apiUrl + `/coordinates/search`, data);
  }

  deleteCoordinate(_id: string) {
    return this.http.delete(environment.apiUrl + `/coordinates/${_id}/delete`);
  }

}
