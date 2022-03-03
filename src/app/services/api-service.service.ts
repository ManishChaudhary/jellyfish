import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_KEY = "3f30695bb93091c15655f7e4f9d3af3c";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(selectedCityObj): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityObj.lat}&lon=${selectedCityObj.lon}&units=metric&appid=${API_KEY}`);
  }
  getWeatherForecast(lat, lon): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
  }

}
