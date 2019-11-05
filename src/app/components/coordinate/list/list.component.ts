import { Component, OnInit } from '@angular/core';
import { CoordinateService } from  '../../../shared/coordinate.service';
import { Coordinate } from '../../../shared/coordinate.model';
import { environment } from '../../../../environments/environment';
import * as io from 'socket.io-client';

declare var M: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [CoordinateService]
})
export class ListComponent implements OnInit {
  private socket;
  constructor(public coordinateService: CoordinateService) {
    this.socket = io(environment.apiUrl);
   }

  ngOnInit() {
    this.refreshCoordinateList();
    this.socket.on('Coordinate', () => {
      this.refreshCoordinateList();
    })
  }

  refreshCoordinateList() {
    this.coordinateService.getCoordinate().subscribe((res) => {
      this.coordinateService.coordinates = res as Coordinate[];
    });
  }

  onDelete(_id: string) {
    if (confirm('Desea borrar el evento?') == true) {
      this.coordinateService.deleteCoordinate(_id).subscribe((res) => {
        this.refreshCoordinateList();
        M.toast({ html: 'Se ha eliminado el evento', classes: 'rounded' });
      });
    }
  }

}
