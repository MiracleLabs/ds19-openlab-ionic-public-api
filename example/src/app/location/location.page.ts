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