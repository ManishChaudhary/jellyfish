import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitySelectComponent } from './city-select/city-select.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharingServiceService } from './services/sharing-service.service';
import { DayWeatherComponent } from './weather-forecast/day-weather/day-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySelectComponent,
    CurrentWeatherComponent,
    WeatherForecastComponent,
    DayWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
