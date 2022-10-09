import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ApodNasaComponent } from './nasa/apod-nasa/apod-nasa.component';
import { MarsRoversComponent } from './nasa/mars-rovers/mars-rovers.component';
import { NasaComponent } from './nasa/nasa.component';
import { NeowsComponent } from './nasa/neows/neows.component';
import { JamesWebbComponent } from './random-apis/james-webb/james-webb.component';
import { KeplerProjectComponent } from './random-apis/kepler-project/kepler-project.component';
import { LaunchesComponent } from './random-apis/launches/launches.component';
import { RandomApisComponent } from './random-apis/random-apis.component';
import { UfoSightingsComponent } from './random-apis/ufo-sightings/ufo-sightings.component';
import { LaunchpadsComponent } from './roscosmos/launchpads/launchpads.component';
import { RoscosmosComponent } from './roscosmos/roscosmos.component';
import { SpaceCraftsComponent } from './roscosmos/space-crafts/space-crafts.component';
import { SpaceTugsComponent } from './roscosmos/space-tugs/space-tugs.component';
import { SettingsComponent } from './settings/settings.component';
import { DragonsComponent } from './space-x/dragons/dragons.component';
import { HistoricalEventsComponent } from './space-x/historical-events/historical-events.component';
import { RocketsComponent } from './space-x/rockets/rockets.component';
import { SpaceXComponent } from './space-x/space-x.component';
import { SupportusComponent } from './supportus/supportus.component';

const routes: Routes = [
  //menu urls
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'supportUs', component: SupportusComponent, pathMatch: 'full' },
  

  //nasa urls
  { path: 'nasa', component: NasaComponent, pathMatch: 'full' },
  { path: 'nasa/apod', component: ApodNasaComponent, pathMatch: 'full' },
  { path: 'nasa/neows', component: NeowsComponent, pathMatch: 'full' },
  { path: 'nasa/mars-rovers', component: MarsRoversComponent, pathMatch: 'full' },
  //spaceX urls
  { path: 'spaceX', component: SpaceXComponent, pathMatch: 'full' },
  { path: 'spaceX/historical-events', component: HistoricalEventsComponent, pathMatch: 'full' },
  { path: 'spaceX/dragons', component: DragonsComponent, pathMatch: 'full' },
  { path: 'spaceX/rockets', component: RocketsComponent, pathMatch: 'full' },

  //roscosmos urls
  { path: 'roscosmos', component: RoscosmosComponent, pathMatch: 'full' },
  { path: 'roscosmos/spaceTugs', component: SpaceTugsComponent, pathMatch: 'full' },
  { path: 'roscosmos/launchPads', component: LaunchpadsComponent, pathMatch: 'full' },
  { path: 'roscosmos/spaceCrafts', component: SpaceCraftsComponent, pathMatch: 'full' },

  //random apis urls
  { path: 'random-apis', component: RandomApisComponent, pathMatch: 'full' },
  { path: 'random-apis/kepler-project', component: KeplerProjectComponent, pathMatch: 'full' },
  { path: 'random-apis/launches', component: LaunchesComponent, pathMatch: 'full' },
  { path: 'random-apis/ufo-sightings', component: UfoSightingsComponent, pathMatch: 'full' },
  { path: 'random-apis/james-webb', component: JamesWebbComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
