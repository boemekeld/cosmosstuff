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
import { ReactiveFormsModule } from '@angular/forms';
import { credentials } from './services/nasa/credentials';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NasaComponent,
    ApodNasaComponent,
    NeowsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [credentials],
  bootstrap: [AppComponent]
})
export class AppModule { }
