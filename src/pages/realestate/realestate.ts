import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

/**
 * Generated class for the RealestatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-realestate',
  templateUrl: 'realestate.html',
})
export class RealestatePage {
  @ViewChild(Slides) slides: Slides;
  public showGallery: boolean = false;
  //public pics: any = ["1","2","3","4","5","6","7","8","9","10"];
  public pics: any = [
    "../../assets/imgs/fwdconstructionphotos/pic1.jpg",
    "../../assets/imgs/fwdconstructionphotos/pic2.jpg",
    "../../assets/imgs/fwdconstructionphotos/pic3.jpg",
    "../../assets/imgs/fwdconstructionphotos/pic4.jpg",
    "../../assets/imgs/fwdconstructionphotos/pic5.jpg",
    "../../assets/imgs/fwdconstructionphotos/pic6.jpg",
    "../../assets/imgs/fwdconstructionphotos/pic7.jpg",
    "../../assets/imgs/fwdconstructionphotos/pic8.jpg",
    "../../assets/imgs/fwdconstructionphotos/pic9.jpg",
    "../../assets/imgs/fwdconstructionphotos/pic10.jpg"        
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealestatePage');
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

}
