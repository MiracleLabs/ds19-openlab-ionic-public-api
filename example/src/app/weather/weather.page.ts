import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../providers/weather-api.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage {

  weather:any;  
  location:any;
constructor(private weatherProvider: WeatherApiService, private storage: Storage,public actRoute: ActivatedRoute) { 
    
 this.location = this.actRoute.snapshot.params['place'];
 console.log(this.location)
 this.weatherProvider.getWeather(this.location).subscribe(
  data =>{
     
    this.weather = data;
     console.log(JSON.stringify(this.weather));
  }
  );
}

  ionViewWillEnter(){  
    this.storage.get('location').then((val) => {
          this.location = JSON.parse(val);            
    }); 
  }


}
