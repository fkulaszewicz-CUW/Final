import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CarDataService } from 'src/app/car-data.service';

@Component({
  selector: 'app-fastest-cars',
  templateUrl: './fastest-cars.component.html',
  styleUrls: ['./fastest-cars.component.scss']
})
export class FastestCarsComponent implements OnInit {

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
    this.carDataService.getFastestCars().subscribe((cars: any) => {
      this.cars = cars.data;
    })
  }

}
