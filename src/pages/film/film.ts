import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

/**
 * Generated class for the FilmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {
  @ViewChild(Slides) slides: Slides;
  public showGallery: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmPage');
  }

  ViewGallery() {
    this.showGallery = true;
  }

  HideGallery() {
    this.showGallery = false;
  }
  ionViewDidEnter() {
    // if (this.showGallery)
    //   this.slides.startAutoplay();
  }

  ionViewWillLeave() {
    // if (this.showGallery)
    //   this.slides.stopAutoplay();
  }

}
