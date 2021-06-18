import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';
import { CarProfileComponent } from './pages/car-profile/car-profile.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateCarProfileComponent } from './pages/create-car-profile/create-car-profile.component';
import { UpdateCarProfileComponent } from './pages/update-car-profile/update-car-profile.component';
import { FastestCarsComponent } from './pages/fastest-cars/fastest-cars.component';
import { MostHPComponent } from './pages/most-hp/most-hp.component';
import { TopSpeedComponent } from './pages/top-speed/top-speed.component';
import { CarPriceComponent } from './pages/car-price/car-price.component';
import { LapTimeComponent } from './pages/lap-time/lap-time.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    CarProfileComponent,
    CreateCarProfileComponent,
    UpdateCarProfileComponent,
    FastestCarsComponent,
    MostHPComponent,
    TopSpeedComponent,
    CarPriceComponent,
    LapTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
