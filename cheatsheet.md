# DS19 Open Lab | Connecting Your Ionic App to a Public API Service

The below markdown file consists of commands and code snippets that will help you complete the lab - Connecting Your Ionic App to a Public API Service.

## Commands

### Install Cordova 

```shell
npm install -g cordova
```
### Install Ionic Framework

```shell
npm install -g ionic
```

### Create an Ionic Application

```shell
ionic start <your-application-name> blank
```

### Create a page in Ionic Application

```shell
ionic g page <your-page-name>
```
### Create a provider in Ionic Application

```shell
ionic g service providers/<your-provider-name>
```
### Simulate the App in browser

```shell
ionic serve
```
### Simulate the App in browser along with platform

```shell
ionic serve -l
```

## Code Snippets

### app.module.ts

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WeatherPage } from './weather/weather.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { LocationPage } from './location/location.page';

@NgModule({
  declarations: [AppComponent,LocationPage,WeatherPage],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule,IonicStorageModule.forRoot(), IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

### location.html

```html
<ion-header>

    <ion-toolbar color="primary">
      <ion-title  >location</ion-title>
    </ion-toolbar>
  
  </ion-header>
  
  
  <ion-content padding >
    <ion-grid>
      <ion-row>
        <ion-col width-100>
          <ion-list>
              <form #form="ngForm" (ngSubmit)="saveForm(form)" novalidate>
                  <ion-item>
                    <ion-label>Place</ion-label>
                    <ion-input type="text" required [(ngModel)]="location.place" name="place"></ion-input>
                  </ion-item>
                  
                  <br>
                  <ion-button type="submit" block>SAVECHANGES</ion-button>
                </form>
          </ion-list>
  
        </ion-col>
      </ion-row>
    </ion-grid>
  
  </ion-content>

  <ion-footer>
    <ion-toolbar color="dark">
      <ion-title text-center> Built by
        <strong>Miracle’s</strong>
        <strong style="color:#00bfff;"> Innovation Labs</strong>
      </ion-title>
    </ion-toolbar>
  </ion-footer>
```

### location.ts

```javascript
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-location',
  templateUrl: 'location.page.html',
  styleUrls: ['location.page.scss'],
})
export class LocationPage {

  location = {
    place: '',
   
  };
  place:string;
   

  constructor(public route:Router, private storage: Storage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(data){
    console.log("form", data.value)
    let location = {
      place: data.value.place,
    }

    console.log(location);
    this.storage.set('location', JSON.stringify(location));
    this.route.navigate(['weather',location]);
  }

}
```

### weather.html

```html
<ion-header>
  <ion-toolbar color="primary">
    <ion-title >Weather</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content >
  <div class="background">
  <!--Display only if the data is loaded -->
  <ion-grid *ngIf = "weather">
    <ion-row>
      <ion-col width-50 offset-25>
        <!-- Displaying weather location -->
        <div class="textColor">
        <h5 class="ion-text-center">{{ weather.request.query }}</h5>
        </div>
        <!--Displaying weather icon -->
        <div class="icon"  class="ion-text-center">
          <img src="{{weather.current.weather_icons}}">
        </div>

        <div class="textColor" >
          <h1 class="ion-text-center">{{weather.current.temperature}}C</h1>
        </div>
        <!-- Displaying weather description -->
        <div class="textColor">
        <h5 class="ion-text-center">{{weather.current.weather_descriptions}}</h5>
        </div>
        <!-- Displaying temperature in Farenhite-->
        <div class="textColor">
        <h6 class="ion-text-center">Last updated</h6>
        </div>
        <div class="textColor"  class="ion-text-center">
          <h5 class="textColor">{{weather.location.localtime}}</h5>
        </div>
      </ion-col>

    </ion-row>
    <br>
    <div text-center>
      <ion-row>
        <ion-col>
          <strong class="textColor">Pressure</strong>
        </ion-col>
        <ion-col>
          <strong class="textColor"> {{weather.current.pressure}}</strong>
        </ion-col>

      </ion-row>
      <br>
      <ion-row>
        <ion-col>
          <strong class="textColor">Humidity</strong>
        </ion-col>
        <ion-col>
          <strong class="textColor"> {{weather.current.humidity}}</strong>
        </ion-col>

      </ion-row>
      <br>
      <ion-row>
        <ion-col>
          <strong class="textColor">Wind Speed(KPH)</strong>
        </ion-col>
        <ion-col>
          <strong class="textColor"> {{weather.current.wind_speed}}</strong>
        </ion-col>

      </ion-row>
      <br>
      <ion-row>
        <ion-col>
          <strong class="textColor">Visibility</strong>
        </ion-col>
        <ion-col>
          <strong class="textColor"> {{weather.current.visibility}}</strong>
        </ion-col>

      </ion-row>


    </div>

  </ion-grid>

</div>
</ion-content>

<ion-footer>
  <ion-toolbar color="dark">
    <ion-title  class="ion-text-center"> Built by
      <strong>Miracle’s</strong>
      <strong style="color:#00bfff;"> Innovation Labs</strong>
    </ion-title>
  </ion-toolbar>
</ion-footer>  
```

### weather.ts

```javascript
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

```

### WeatherApiService.ts

```javascript
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
```

