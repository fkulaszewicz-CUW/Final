import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarProfileComponent } from './pages/car-profile/car-profile.component';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';

const routes: Routes = [
  { path: '', component: WelcomeScreenComponent },
  { path: 'car-profile', component: CarProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
