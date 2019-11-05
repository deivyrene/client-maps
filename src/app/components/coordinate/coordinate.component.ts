import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoordinateService } from  '../../shared/coordinate.service';
import { Coordinate } from '../../shared/coordinate.model';
import { environment } from '../../../environments/environment';
import * as io from 'socket.io-client';

declare var M: any;

@Component({
  selector: 'form-coordinate',
  templateUrl: './coordinate.component.html',
  styleUrls: ['./coordinate.component.scss'],
  providers: [CoordinateService]
})
export class CoordinateComponent implements OnInit {
  private socket;
  constructor(public coordinateService: CoordinateService) {
    this.socket = io(environment.apiUrl);
  }

  ngOnInit() {
    this.resetForm();
    this.socket.on('Coordinate', () => {
      this.refreshCoordinateList();
    })
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.coordinateService.selectedCoordinate = {
      _id: "",
      lat: "",
      lng: "",
      description: ""
    }
  }

  onSubmit(form: NgForm) {
    this.coordinateService.postCoordinate(form.value).subscribe((res) => {
      this.resetForm(form);
      M.toast({ html: 'Evento creado correctamente', classes: 'rounded' });
    });
  }

  refreshCoordinateList() {
    this.coordinateService.getCoordinate().subscribe((res) => {
      this.coordinateService.coordinates = res as Coordinate[];
    });
  }

}
