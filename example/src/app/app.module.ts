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
