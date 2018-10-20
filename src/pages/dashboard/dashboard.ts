import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides, Events } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { LaundryPage } from '../laundry/laundry';



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
  public showHeader: boolean;
  public ionScroll;
  public showButton = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public myElement: ElementRef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  ngAfterViewInit(){
    this.slides.fade = {
      crossFade: true
    }
  }

  ngOnInit(){
    if(window.innerWidth > 800)
    this.showHeader = false;
    else
    this.showHeader = true;
    console.log(this.myElement.nativeElement.children[0].children[1])
    // Ionic scroll element
    this.ionScroll = this.myElement.nativeElement.children[0].children[1]

    console.log(this.ionScroll.scrollTop);
    
    // On scroll function
    this.ionScroll.addEventListener("scroll", () => {
      if (this.ionScroll.scrollTop > window.innerHeight) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    });

  }

  scrollToTop(scrollDuration) {
let scrollStep = -this.ionScroll.scrollTop / (scrollDuration / 15);
let scrollInterval = setInterval( () => {
    if ( this.ionScroll.scrollTop != 0 ) {
        this.ionScroll.scrollTop = this.ionScroll.scrollTop + scrollStep;
    } else {
      clearInterval(scrollInterval);
    }
}, 15);}

  

  slideClicked(idx: number){    
    if (idx) {
      this.events.publish('slide:clicked', idx);
    }
  }
  

  ionViewDidEnter(){
    this.slides.startAutoplay();
//     setInterval(()=> {
//     this.imgName = this.imgList[this.imgIndex];  
//     this.imgIndex++;

//     if(this.imgIndex >= this.imgList.length)
//     {
//       this.imgIndex = 0;
      
//     } 
//     this.imgAction = true;   
      
//  }, 7000);
  }

  ionViewWillLeave(){
    this.slides.stopAutoplay();
  }

}
