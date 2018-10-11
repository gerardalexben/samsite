import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
  public showHeader: boolean;

 constructor(public navCtrl: NavController, public navParams: NavParams,public app: App) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
    if(this.navParams.data.pageName)
    this.navCtrl.push(this.navParams.data.pageName);
  }

  ngOnInit(){
    if(window.innerWidth > 800)
    this.showHeader = false;
    else
    this.showHeader = true;

  }

}
