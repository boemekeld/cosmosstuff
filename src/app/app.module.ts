import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NasaComponent } from './nasa/nasa.component';
import { ApodNasaComponent } from './nasa/apod-nasa/apod-nasa.component';
import { HttpClientModule } from '@angular/common/http';
import { NeowsComponent } from './nasa/neows/neows.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { credentials } from './services/credentials';
import { exportToExcel } from './core/exportExcel';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { modals } from './core/modals';
import { MarsRoversComponent } from './nasa/mars-rovers/mars-rovers.component';
import { RandomApisComponent } from './random-apis/random-apis.component';
import { KeplerProjectComponent } from './random-apis/kepler-project/kepler-project.component';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [credentials,exportToExcel,modals],
  bootstrap: [AppComponent]
})
export class AppModule { }
