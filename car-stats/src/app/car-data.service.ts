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

  getProfile(profileId: string) {
    return this.webReqService.get(`database/carProfile/byID/${profileId}`);
  }

  createCar(carName: string, tireCompanyUsed: string, topSpeedMPH: string, zeroToSixty: string, modelYear: string,
    lapTimeMinutes: string, lapTimeSeconds: string, testedCardPrice: string, HP: string, weightLB: string, LBPerHP: string) {
    return this.webReqService.post('database/carProfile', {
      carName, tireCompanyUsed, topSpeedMPH, zeroToSixty, modelYear, lapTimeMinutes, lapTimeSeconds, testedCardPrice,
      HP, weightLB, LBPerHP
    })
  }

  updateCar(profileId: string, carName: string, tireCompanyUsed: string, topSpeedMPH: string, zeroToSixty: string, modelYear: string,
    lapTimeMinutes: string, lapTimeSeconds: string, testedCardPrice: string, HP: string, weightLB: string, LBPerHP: string) {
    return this.webReqService.put(`database/carProfile/byID/${profileId}`, {
      carName, tireCompanyUsed, topSpeedMPH, zeroToSixty, modelYear, lapTimeMinutes, lapTimeSeconds,
      testedCardPrice, HP, weightLB, LBPerHP
    })
  }

  deleteProfile(id: string) {
    return this.webReqService.delete(`database/carProfile/byID/${id}`);
  }

}
