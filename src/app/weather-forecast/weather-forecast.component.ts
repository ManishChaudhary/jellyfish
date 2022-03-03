import { ApiServiceService } from './../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { SharingServiceService } from '../services/sharing-service.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  public forcastDays = [];
  public currentWeatherDetails;
  public forecastDeatailsArr = [];
  public loading: Boolean = false;

  constructor(public sharingService: SharingServiceService,
    public apiService: ApiServiceService) { }

  ngOnInit() {
    this.sharingService.currentData.subscribe(data => {
      this.currentWeatherDetails = data;
      this.getWeatherForecast();
    });
  }

  getWeekDay(inputDate) {
    inputDate = inputDate > 6 ? inputDate / 6 : inputDate;
    switch (inputDate) {
      case 6:
        return "Sun";
      case 0:
        return "Mon";
      case 1:
        return "Tue";
      case 2:
        return "Wed";
      case 3:
        return "Thu";
      case 4:
        return "Fri";
      case 5:
        return "Sat";
    }
  }

  getWeatherForecast() {
    let lat = this.currentWeatherDetails.coord ? this.currentWeatherDetails.coord.lat : '';
    let lon = this.currentWeatherDetails.coord ? this.currentWeatherDetails.coord.lon : '';
    if (lat && lon) {
      this.loading = true;
      this.apiService.getWeatherForecast(lat, lon)
        .subscribe(data => {
          this.forecastDeatailsArr = [];
          data.list.map(item => {
            let temp = this.forecastDeatailsArr[this.forecastDeatailsArr.length - 1];
            if (!this.forecastDeatailsArr.length) {
              this.forecastDeatailsArr.push(item);
            } else if (temp.dt_txt.substring(0, 10) != item.dt_txt.substring(0, 10)) {
              this.forecastDeatailsArr.push(item);
            } else {
              temp.main.temp_min = temp.main.temp_min < item.main.temp_min ? temp.main.temp_min : item.main.temp_min;
              temp.main.temp_max = temp.main.temp_max > item.main.temp_max ? temp.main.temp_max : item.main.temp_max;
            }
          })
          this.showDaysToForecast();
          this.loading = false;
        });
    }
  };

  showDaysToForecast() {
    this.forcastDays = [];
    this.forcastDays.push(this.getWeekDay(parseInt(this.forecastDeatailsArr[1].dt_txt.substring(8, 10))));
    this.forcastDays.push(this.getWeekDay(parseInt(this.forecastDeatailsArr[2].dt_txt.substring(8, 10))));
    this.forcastDays.push(this.getWeekDay(parseInt(this.forecastDeatailsArr[3].dt_txt.substring(8, 10))));
  }

}
