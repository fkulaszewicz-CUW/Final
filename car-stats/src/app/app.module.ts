import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';
import { CarProfileComponent } from './pages/car-profile/car-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    CarProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
