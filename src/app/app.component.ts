import { Component } from '@angular/core';
import { GetApiService } from "../app/get-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CapZone';
  constructor() { }


  ngOnInit() { }

}
