import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingServiceService {
  // private cityWeatherDeatils: any;
  private cityWeatherDeatils = new BehaviorSubject("");
  private loader = new BehaviorSubject(false);
  currentData = this.cityWeatherDeatils.asObservable();
  constructor() { }

  setData(data) {
    this.cityWeatherDeatils.next(data);
  }

  getData() {
    return this.cityWeatherDeatils;
  }

  setLoader(flag) {
    this.loader.next(flag);
  }
}
