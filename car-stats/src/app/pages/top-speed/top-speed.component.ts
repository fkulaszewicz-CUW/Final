import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CarDataService } from 'src/app/car-data.service';

@Component({
  selector: 'app-top-speed',
  templateUrl: './top-speed.component.html',
  styleUrls: ['./top-speed.component.scss']
})
export class TopSpeedComponent implements OnInit {

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
    this.carDataService.getTopSpeed().subscribe((cars: any) => {
      this.cars = cars.data;
    })
  }

}
