import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  constructor(private http: HttpClient) { }

    shayurl = 'https://shayshay.p.rapidapi.com/random?limit=3';

    options = {
      headers: new HttpHeaders({
        "x-rapidapi-key": "7b0347931fmshd041067ab6852c4p16223fjsne634a8cfd5a7",
        "x-rapidapi-host": "shayshay.p.rapidapi.com"
      })
    };

    apiCall(): Observable<any> {
      return this.http.get(this.shayurl, this.options);
    }
}
