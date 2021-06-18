import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarPriceComponent } from './pages/car-price/car-price.component';
import { CarProfileComponent } from './pages/car-profile/car-profile.component';
import { CreateCarProfileComponent } from './pages/create-car-profile/create-car-profile.component';
import { FastestCarsComponent } from './pages/fastest-cars/fastest-cars.component';
import { LapTimeComponent } from './pages/lap-time/lap-time.component';
import { MostHPComponent } from './pages/most-hp/most-hp.component';
import { TopSpeedComponent } from './pages/top-speed/top-speed.component';
import { UpdateCarProfileComponent } from './pages/update-car-profile/update-car-profile.component';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';

const routes: Routes = [
  { path: '', component: WelcomeScreenComponent },
  { path: 'car-profile', redirectTo: 'profiles', pathMatch: 'full' },
  { path: 'profiles', component: CarProfileComponent },
  { path: 'profiles/:profileId', component: CarProfileComponent },
  { path: 'create-car-profile', component: CreateCarProfileComponent },
  { path: 'update-profile/:profileId', component: UpdateCarProfileComponent },
  { path: 'fastestCars', component: FastestCarsComponent },
  { path: 'fastestCars/:profileId', component: FastestCarsComponent },
  { path: 'mostHP', component: MostHPComponent },
  { path: 'mostHP/:profileId', component: MostHPComponent },
  { path: 'topSpeed', component: TopSpeedComponent },
  { path: 'topSpeed/:profileId', component: TopSpeedComponent },
  { path: 'carPrice', component: CarPriceComponent },
  { path: 'carPrice/:profileId', component: CarPriceComponent },
  { path: 'lapTime', component: LapTimeComponent },
  { path: 'lapTime/:profileId', component: LapTimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
