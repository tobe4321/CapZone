import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetLinesService {

  constructor(private http: HttpClient) { }
  url = "https://api.collegefootballdata.com/lines?year=2020&seasonType=regular"

  getLines(): Observable<any> {
    return this.http.get<any[]>(this.url);
  }
}
