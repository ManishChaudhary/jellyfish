import { SharingServiceService } from './../services/sharing-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  public currentWeatherDetails;
  public loading: Boolean = false;
  constructor(public sharingService: SharingServiceService) { }

  ngOnInit() {
    this.loading = true;
    this.sharingService.currentData.subscribe(data => {
      this.currentWeatherDetails = data;
      this.loading = false;
    });
  }

}
