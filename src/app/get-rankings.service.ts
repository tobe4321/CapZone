import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRankingsService {

  constructor(private http: HttpClient) { }
  url = 'https://api.collegefootballdata.com/rankings?year=2020&seasonType=regular';

  getRankings(): Observable<any>  {
    return this.http.get<any[]>(this.url);
  }
}
