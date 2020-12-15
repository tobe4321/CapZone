import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTeamLogoService {

  constructor(private http: HttpClient) { }

  url = 'https://api.collegefootballdata.com/teams'
  getLogo(): Observable<any> {
    return this.http.get<any[]>(this.url);
  }
}
