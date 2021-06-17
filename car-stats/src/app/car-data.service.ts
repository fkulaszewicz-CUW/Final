import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  constructor(private webReqService: WebRequestService) { }

  getCars() {
    return this.webReqService.get('database/carProfile');
  }
}
