import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApodNasaComponent } from './nasa/apod-nasa/apod-nasa.component';
import { MarsRoversComponent } from './nasa/mars-rovers/mars-rovers.component';
import { NasaComponent } from './nasa/nasa.component';
import { NeowsComponent } from './nasa/neows/neows.component';
import { KeplerProjectComponent } from './random-apis/kepler-project/kepler-project.component';
import { LaunchesComponent } from './random-apis/launches/launches.component';
import { RandomApisComponent } from './random-apis/random-apis.component';
import { UfoSightingsComponent } from './random-apis/ufo-sightings/ufo-sightings.component';

const routes: Routes = [
  //menu urls
  { path: '', component: HomeComponent, pathMatch: 'full' },
  //nasa urls
  { path: 'nasa', component: NasaComponent, pathMatch: 'full' },
  { path: 'nasa/apod', component: ApodNasaComponent, pathMatch: 'full' },
  { path: 'nasa/neows', component: NeowsComponent, pathMatch: 'full' },
  { path: 'nasa/mars-rovers', component: MarsRoversComponent, pathMatch: 'full' },
  //random apis urls
  { path: 'random-apis', component: RandomApisComponent, pathMatch: 'full' },
  { path: 'random-apis/kepler-project', component: KeplerProjectComponent, pathMatch: 'full' },
  { path: 'random-apis/launches', component: LaunchesComponent, pathMatch: 'full' },
  { path: 'random-apis/ufo-sightings', component: UfoSightingsComponent, pathMatch: 'full' }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
