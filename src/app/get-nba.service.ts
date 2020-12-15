import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetNbaService {

  constructor(private http: HttpClient) { }

  standingsUrl = 'https://api-nba-v1.p.rapidapi.com/standings/standard/2018'
  teamsUrl = 'https://api-nba-v1.p.rapidapi.com/teams/league/standard'

  options = {
    headers: new HttpHeaders({
      "x-rapidapi-key": "7b0347931fmshd041067ab6852c4p16223fjsne634a8cfd5a7",
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      // "useQueryString": true
    })
  }

  getStandings(): Observable<any> {
    return this.http.get(this.standingsUrl, this.options)
  }

  getTeams(): Observable<any> {
    return this.http.get(this.teamsUrl, this.options)
  }

}
