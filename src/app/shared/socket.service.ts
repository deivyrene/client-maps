import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;   

  constructor() { 
    this.socket = io(environment.apiUrl);
  }
}
