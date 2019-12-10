import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
 
  apiKey = '4af0024aa59e61cb28257476dda7b4a7';
  url: string;

  constructor(public http: HttpClient) {
    console.log('Hello ApiConsumingProvider Provider');
    this.url = 'http://api.weatherstack.com/current?access_key='+this.apiKey+'&query=';
  }  

  getWeather(city): Observable <any>{
    return <any> this.http.get(this.url+''+city)
           .map(result => result);
  }    
                       

}