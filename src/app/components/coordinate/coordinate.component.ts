import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoordinateService } from  '../../shared/coordinate.service';
import { Coordinate } from '../../shared/coordinate.model';

declare var M: any;

@Component({
  selector: 'form-coordinate',
  templateUrl: './coordinate.component.html',
  styleUrls: ['./coordinate.component.scss'],
  providers: [CoordinateService]
})
export class CoordinateComponent implements OnInit {

  constructor(private coordinateService: CoordinateService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshCoordinateList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.coordinateService.selectedCoordinate = {
      _id: "",
      lat: "0.0",
      lng: "0.0",
      description: ""
    }
  }

  onSubmit(form: NgForm) {
    this.coordinateService.postCoordinate(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshCoordinateList();
      M.toast({ html: 'Evento creado correctamente', classes: 'rounded' });
    });
  }

  refreshCoordinateList() {
    this.coordinateService.getCoordinate().subscribe((res) => {
      this.coordinateService.coordinates = res as Coordinate[];
    });
  }

  onEdit(data: Coordinate) {
    this.coordinateService.selectedCoordinate = data;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Desea borrar el evento?') == true) {
      this.coordinateService.deleteCoordinate(_id).subscribe((res) => {
        this.refreshCoordinateList();
        this.resetForm(form);
        M.toast({ html: 'Se ha eliminado el evento', classes: 'rounded' });
      });
    }
  }

}
