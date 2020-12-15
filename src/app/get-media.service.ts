import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMediaService {

  constructor(private http: HttpClient) { }

  url = 'https://api.collegefootballdata.com/games/media?year=2020'

  getMediaInfo(): Observable<any> {
    return this.http.get<any[]>(this.url);
  }
}
