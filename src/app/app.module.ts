import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ScoreviewComponent } from './scoreview/scoreview.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { EcuFootballComponent } from './ecu-football/ecu-football.component';
import { NbaComponent } from './nba/nba.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreviewComponent,
    HeaderComponent,
    HomeComponent,
    FantasyComponent,
    EcuFootballComponent,
    NbaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
