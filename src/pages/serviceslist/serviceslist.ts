import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesPage } from '../services/services';
import { LaundryPage } from '../laundry/laundry';
import { GarmentsPage } from '../garments/garments';
import { FilmPage } from '../film/film';
import { RealestatePage } from '../realestate/realestate';
import { HealthcarePage } from '../healthcare/healthcare';


/**
 * Generated class for the ServiceslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serviceslist',
  templateUrl: 'serviceslist.html',
})
export class ServiceslistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app: App, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceslistPage');
  }

  OpenPage(page: any){
    this.viewCtrl.dismiss();
    let navLength = this.app.getActiveNav().length();
    while(navLength > 1){
      this.app.getActiveNav().pop();
      navLength--;
    }
    this.app.getActiveNav().push(page);
    //this.navCtrl.push(ServicesPage);
  }

}
