import { SharingServiceService } from './../services/sharing-service.service';
import { Component, OnInit } from '@angular/core';
import { CITIES } from 'src/utility/cities.const';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.scss']
})
export class CitySelectComponent implements OnInit {
  public citiesList = [];
  public selectedCity: String = '3038789';
  public loading: Boolean = false;

  constructor(public apiService: ApiServiceService,
    public sharingService: SharingServiceService) { }

  ngOnInit() {
    this.citiesList = CITIES;
    this.getCityDetails(this.selectedCity);
  }

  getCityDetails(id) {
    let selectedCityObj = this.citiesList.filter(item => {
      return item.id == id
    });
    this.loading = true;
    this.apiService.getCurrentWeather(selectedCityObj[0])
      .subscribe(res => {
        this.sharingService.setData(res);
        this.loading = false;
      });
  }

}
