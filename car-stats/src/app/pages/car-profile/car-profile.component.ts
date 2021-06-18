import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CarDataService } from 'src/app/car-data.service';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-car-profile',
  templateUrl: './car-profile.component.html',
  styleUrls: ['./car-profile.component.scss']
})
export class CarProfileComponent implements OnInit {

  profiles: any;
  cars: any[] = []
  selectedProfileId: any;

  constructor(private carDataService: CarDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.profileId === undefined) {
        console.log("Do not check ID");
      } else {
        this.selectedProfileId = params.profileId;
        this.carDataService.getProfile(params.profileId).subscribe((profiles: any) => {
          this.profiles = profiles.data;
        })
      }
    })

    this.carDataService.getCars().subscribe((cars: any) => {
      this.cars = cars.data;
    })
  }

  onDeleteProfileClick() {
    if (this.selectedProfileId) {
      this.carDataService.deleteProfile(this.selectedProfileId).subscribe((response: any) => {
        window.location.reload();
      })
    }
  }

}
