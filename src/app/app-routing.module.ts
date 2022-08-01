import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApodNasaComponent } from './nasa/apod-nasa/apod-nasa.component';
import { NasaComponent } from './nasa/nasa.component';

const routes: Routes = [
  //menu urls
  { path: '', component: HomeComponent, pathMatch: 'full' },
  //nasa urls
  { path: 'nasa', component: NasaComponent, pathMatch: 'full' },
  { path: 'nasa/apod', component: ApodNasaComponent, pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
