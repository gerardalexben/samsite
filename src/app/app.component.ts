import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  showTest: boolean = true;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    setTimeout(() => { this.showTest = false; }, 5000);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit(){
    if(window.innerWidth > 800)
    this.rootPage = TabsPage;
    else
    this.rootPage = HomePage;
  }
}

