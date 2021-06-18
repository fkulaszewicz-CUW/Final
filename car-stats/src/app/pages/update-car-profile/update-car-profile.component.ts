import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CarDataService } from 'src/app/car-data.service';

@Component({
  selector: 'app-update-car-profile',
  templateUrl: './update-car-profile.component.html',
  styleUrls: ['./update-car-profile.component.scss']
})
export class UpdateCarProfileComponent implements OnInit {

  constructor(private carDataService: CarDataService, private route: ActivatedRoute) { }

  profiles: any;
  success: string = '';
  show: string = 'show';
  selectedProfileId: any;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.profileId) {
        this.selectedProfileId = params.profileId;
        this.carDataService.getProfile(params.profileId).subscribe((profiles: any) => {
          this.profiles = profiles.data;
        })
      }
    })
  }

  updateCarProfile(carName: string, tireCompanyUsed: string, topSpeedMPH: string, zeroToSixty: string, modelYear: string,
    lapTimeMinutes: string, lapTimeSeconds: string, testedCardPrice: string, HP: string, weightLB: string, LBPerHP: string) {
    this.success = '';
    this.show = 'show';
    this.carDataService.updateCar(this.selectedProfileId, carName, tireCompanyUsed, topSpeedMPH, zeroToSixty, modelYear, lapTimeMinutes, lapTimeSeconds,
      testedCardPrice, HP, weightLB, LBPerHP).subscribe((response: any) => {
        this.success = response.message;
        this.show = '';
      })
  }

}
