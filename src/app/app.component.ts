import { Component, OnInit } from '@angular/core';
import { WeatherData } from './model/weather.model';
import { WeatherService } from './service/weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-api';

  constructor(
    private weatherService: WeatherService
  ) {

  }

  weatherData?: WeatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData('Seoul').subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
}
