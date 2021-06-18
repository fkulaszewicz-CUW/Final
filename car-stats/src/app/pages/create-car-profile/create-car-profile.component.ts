import { Component, OnInit } from '@angular/core';
import { CarDataService } from 'src/app/car-data.service';

@Component({
  selector: 'app-create-car-profile',
  templateUrl: './create-car-profile.component.html',
  styleUrls: ['./create-car-profile.component.scss']
})
export class CreateCarProfileComponent implements OnInit {

  constructor(private carDataService: CarDataService) { }

  message: string = '';
  success: string = '';
  show: string = 'show';
  ngOnInit(): void {
  }

  createCarProfile(carName: string, tireCompanyUsed: string, topSpeedMPH: string, zeroToSixty: string, modelYear: string,
    lapTimeMinutes: string, lapTimeSeconds: string, testedCardPrice: string, HP: string, weightLB: string, LBPerHP: string) {
    this.message = '';
    this.success = '';
    this.show = 'show';

    if (carName === '' || tireCompanyUsed === '' || topSpeedMPH === '' || zeroToSixty === '' || modelYear === '' || lapTimeMinutes === '' ||
      lapTimeSeconds === '' || testedCardPrice === '' || HP === '' || weightLB === '' || LBPerHP === '') {
      this.message = 'show';
    } else {
      this.carDataService.createCar(carName, tireCompanyUsed, topSpeedMPH, zeroToSixty, modelYear, lapTimeMinutes, lapTimeSeconds,
        testedCardPrice, HP, weightLB, LBPerHP
      ).subscribe((response: any) => {
        this.success = response.message;
        this.show = '';
        console.log(response.message)
      })
    }
  }

}
