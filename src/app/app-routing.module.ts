import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreviewComponent } from "../app/scoreview/scoreview.component";
import { FantasyComponent } from './fantasy/fantasy.component';
import { HomeComponent } from './home/home.component';
import { NbaComponent } from './nba/nba.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cfb', component: ScoreviewComponent },
  { path: 'fantasy', component:FantasyComponent },
  { path: 'nba', component:NbaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
