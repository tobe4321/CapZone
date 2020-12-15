import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRecordsService {

  constructor(private http:HttpClient) { }
  url = 'https://api.collegefootballdata.com/records?year=2020';

  getRecord(): Observable<any> {
    return this.http.get<any[]>(this.url);
  }
}
