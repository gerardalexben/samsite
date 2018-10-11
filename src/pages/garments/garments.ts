import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the GarmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-garments',
  templateUrl: 'garments.html',
})
export class GarmentsPage {
public showHeader:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GarmentsPage');
    
  }

  ngOnInit(){
    if(window.innerWidth > 800)
    this.showHeader = false;
    else
    this.showHeader = true;

  }

}
