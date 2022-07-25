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

  cityName: string = 'Seoul';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        console.log(response);
        this.weatherData = response;
      }
    })
  }
}
