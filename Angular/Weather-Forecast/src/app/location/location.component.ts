import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  city = '';
  weather = [];
  current: number;
  high: number;
  low: number;
  
  constructor(
    private _weatherApiService: WeatherApiService,
    private _route: ActivatedRoute,
  ) {
    // Get the route parameter here
    this._route.paramMap.subscribe(params => {
      this.city = params.get('city');
      this._weatherApiService.getWeather(params.get('city'))
      .then(data => {
        this.weather = data;
        this.current = Math.floor(data.main.temp * 9/5 - 459.67);
        this.high = Math.floor(data.main.temp_max * 9/5 - 459.67);
        this.low = Math.floor(data.main.temp_min * 9/5 - 459.67);
      })
    })
  }
  
  ngOnInit() {
  }

}
