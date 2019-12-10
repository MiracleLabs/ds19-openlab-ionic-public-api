import * as core from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WeatherPage } from './weather/weather.page';
import { LocationPage } from './location/location.page';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:LocationPage},
  {
    path: 'weather',component:WeatherPage  },
];

@core.NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
