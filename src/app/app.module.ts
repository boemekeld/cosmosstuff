import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NasaComponent } from './nasa/nasa.component';
import { ApodNasaComponent } from './nasa/apod-nasa/apod-nasa.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NeowsComponent } from './nasa/neows/neows.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { credentials } from './services/credentials';
import { exportToExcel } from './core/exportExcel';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { modals } from './core/modals';
import { MarsRoversComponent } from './nasa/mars-rovers/mars-rovers.component';
import { RandomApisComponent } from './random-apis/random-apis.component';
import { KeplerProjectComponent } from './random-apis/kepler-project/kepler-project.component';
import { LaunchesComponent } from './random-apis/launches/launches.component';
import { SafePipe } from './core/safePipe';
import { UfoSightingsComponent } from './random-apis/ufo-sightings/ufo-sightings.component';
import { SpaceXComponent } from './space-x/space-x.component';
import { HistoricalEventsComponent } from './space-x/historical-events/historical-events.component';
import { DragonsComponent } from './space-x/dragons/dragons.component';
import { RocketsComponent } from './space-x/rockets/rockets.component';
import { cssVecna } from './core/cssVecna';
import { SettingsComponent } from './settings/settings.component';
import { metaTags } from './core/metaTags';
import { ContactComponent } from './contact/contact.component';
import { dateTool } from './core/dateTool';
import { JamesWebbComponent } from './random-apis/james-webb/james-webb.component';
import { midiaController } from './core/midiaController';
import { MorseCodeComponent } from './random-apis/morse-code/morse-code.component';
import { morseCode } from './core/morseCode';
import { SunriseSunsetComponent } from './random-apis/sunrise-sunset/sunrise-sunset.component';
import { TableComponent } from './shared/table/table.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SupportersComponent } from './supporters/supporters.component';
import { supportersFactory } from './core/supportersFactory';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NasaComponent,
    ApodNasaComponent,
    NeowsComponent,
    MarsRoversComponent,
    RandomApisComponent,
    KeplerProjectComponent,
    LaunchesComponent,
    SafePipe,
    UfoSightingsComponent,
    SpaceXComponent,
    HistoricalEventsComponent,
    DragonsComponent,
    RocketsComponent,
    SettingsComponent,
    ContactComponent,
    JamesWebbComponent,
    MorseCodeComponent,
    SunriseSunsetComponent,
    TableComponent,
    SupportersComponent,
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    
  ],
  providers: [
    credentials,
    exportToExcel,
    modals,
    cssVecna,
    SettingsComponent,
    metaTags,
    dateTool,
    midiaController,
    morseCode,
    supportersFactory,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
