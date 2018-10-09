import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  @ViewChild(Slides) slides: Slides;
  public imgName: any = "../assets/imgs/fashion.jpg";
  public imgAction: boolean = false;
  public imgIndex: any = 0;
  public imgList: any=  ["../assets/imgs/Apartments.jpg", "../assets/imgs/comercial.jpg","../assets/imgs/Villa.jpg"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  

  ionViewDidEnter(){
    //this.slides.startAutoplay();
    setInterval(()=> {
    this.imgName = this.imgList[this.imgIndex];  
    this.imgIndex++;

    if(this.imgIndex >= this.imgList.length)
    {
      this.imgIndex = 0;
      
    } 
    this.imgAction = true;   
      
 }, 7000);
  }

  ionViewWillLeave(){
    //this.slides.stopAutoplay();
  }

}
