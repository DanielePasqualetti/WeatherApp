import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherApiBaseUrl =
    'https://weatherapi-com.p.rapidapi.com/forecast.json';
  private XRapidAPIHostHeaderName = 'X-RapidAPI-Host';
  private XRapidAPIHostHeaderValue = 'weatherapi-com.p.rapidapi.com';
  private XRapidAPIKeyHeaderName = 'X-RapidAPI-Key';
  private XRapidAPIKeyHeaderValue =
    '6f16aecf50mshbd17d5ba03e4f91p1c370ejsn37d0eecad9e7';

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    const headers = new HttpHeaders()
      .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
      .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue);

    const params = new HttpParams().set('q', cityName);

    return this.http.get<WeatherData>(this.weatherApiBaseUrl, {
      headers: headers,
      params: params,
    });
  }
}
