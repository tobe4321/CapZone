import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetScoresService {

  constructor(private http: HttpClient) { }

  url = 'https://api.collegefootballdata.com/games?year=2020&seasonType=regular';
  apiCall(): Observable<any> {
    return this.http.get<any[]>(this.url);
  }
}
