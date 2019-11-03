import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

import { Coordinate } from './coordinate.model';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {
  selectedCoordinate: Coordinate;
  coordinates: Coordinate[];
  readonly baseURL = 'ec2-3-83-64-115.compute-1.amazonaws.com';

  constructor(private http: HttpClient) { }

  postCoordinate(data: Coordinate) {
    return this.http.post(this.baseURL + `/coordinates/create`, data);
  }

  getCoordinate() {
    return this.http.get(this.baseURL + `/coordinates/listAll`);
  }

  searchCoordinate(data) {
    return this.http.post(this.baseURL + `/coordinates/search`, data);
  }

  deleteCoordinate(_id: string) {
    return this.http.delete(this.baseURL + `/coordinates/${_id}/delete`);
  }

}
