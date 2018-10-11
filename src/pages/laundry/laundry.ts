import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

/**
 * Generated class for the LaundryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laundry',
  templateUrl: 'laundry.html',
})
export class LaundryPage {
  @ViewChild(Slides) slides: Slides;
  public showHeader: boolean;
  public showGallery: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaundryPage');
  }
  ViewGallery() {
    this.showGallery = true;
  }

  HideGallery() {
    this.showGallery = false;
  }
  ionViewDidEnter() {
    if (this.showGallery)
      this.slides.startAutoplay();
  }

  ionViewWillLeave() {
    if (this.showGallery)
      this.slides.stopAutoplay();
  }

  ngOnInit(){
    if(window.innerWidth > 800)
    this.showHeader = false;
    else
    this.showHeader = true;

  }

}
