import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.scss']
})
export class DayWeatherComponent implements OnInit {
  @Input() day;
  @Input() dayForecast;
  constructor() { }

  ngOnInit() {
  }

}
