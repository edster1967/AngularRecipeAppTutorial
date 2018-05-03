import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCXFo5z2NRlt2uRbHYe6D2lwglUKGoLxLU",
      authDomain: "ares-recipe-book.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
