import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';
import { CarProfileComponent } from './pages/car-profile/car-profile.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateCarProfileComponent } from './pages/create-car-profile/create-car-profile.component';
import { UpdateCarProfileComponent } from './pages/update-car-profile/update-car-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    CarProfileComponent,
    CreateCarProfileComponent,
    UpdateCarProfileComponent
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
