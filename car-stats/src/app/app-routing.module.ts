import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarProfileComponent } from './pages/car-profile/car-profile.component';
import { CreateCarProfileComponent } from './pages/create-car-profile/create-car-profile.component';
import { UpdateCarProfileComponent } from './pages/update-car-profile/update-car-profile.component';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';

const routes: Routes = [
  { path: '', component: WelcomeScreenComponent },
  { path: 'car-profile', redirectTo: 'profiles', pathMatch: 'full' },
  { path: 'profiles', component: CarProfileComponent },
  { path: 'profiles/:profileId', component: CarProfileComponent },
  { path: 'create-car-profile', component: CreateCarProfileComponent },
  { path: 'update-profile/:profileId', component: UpdateCarProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
