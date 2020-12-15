import { Component, OnInit } from '@angular/core';
import { GetApiService } from "../get-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: GetApiService) { }
  quotes = [];

  ngOnInit() {
    this.api.apiCall().subscribe((data) => {
      this.quotes = data;
    });
  }

  getQuote(quote: any) {
    return quote.quotes[0]
  }

}
