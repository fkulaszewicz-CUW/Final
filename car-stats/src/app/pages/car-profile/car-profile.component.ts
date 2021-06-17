import { Component, OnInit } from '@angular/core';
import { CarDataService } from 'src/app/car-data.service';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-car-profile',
  templateUrl: './car-profile.component.html',
  styleUrls: ['./car-profile.component.scss']
})
export class CarProfileComponent implements OnInit {

  cars: any[] = []

  constructor(private carDataService: CarDataService) { }

  ngOnInit(): void {
    this.carDataService.getCars().subscribe((cars: any) => {
      this.cars = cars.data;
      console.log(this.cars);
    })
  }

}
