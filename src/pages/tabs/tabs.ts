import { Component, ViewChild,ChangeDetectorRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, App, PopoverController, Tabs, ViewController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ServicesPage } from '../services/services';
import { ContactPage } from '../contact/contact';
import { DashboardPage } from '../dashboard/dashboard';
import { ServiceslistPage } from '../serviceslist/serviceslist';
import { LaundryPage } from '../laundry/laundry';
let popover: any;

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  public tab1: any = AboutPage;
  public tab2: any;
  public tab3: any = ContactPage;
  public default: any = DashboardPage;
  public tabevent: any;
  myIndex: number;
 pageName: any;
 tabPlacement: any;
 @ViewChild('myTabs') tabRef: Tabs;
 
  constructor(public navParams: NavParams, public app: App, public popoverCtrl: PopoverController, public navCtrl: NavController) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
    //if(navParams.data.pageName != undefined)
    this.pageName = {pageName: navParams.data.pageName};
    this.tab2 = null;    
  }

  ngOnInit(){
    if(window.innerWidth > 800)
    this.tabPlacement = "top";
    else
    this.tabPlacement = "bottom";
  }
  presentPopover(myEvent: any) {
    if (myEvent != undefined) {
      this.tabevent = myEvent;
      console.log("popover clicked");
      popover = this.popoverCtrl.create(PopoverPage, {}, { cssClass: 'popover-class' });
      popover.onDidDismiss(data => {
        console.log("popover dismiss: " + data);
        if (data) {
          this.tab2 = data.page;
          let tab = this.navCtrl.getActiveChildNav().getByIndex(1);
          tab.setRoot(data.page);
          setTimeout(() => { this.navCtrl.getActiveChildNav().select(1); }, 100)
        }
      });
      popover.present({
        ev: { target: myEvent.btn._elementRef.nativeElement }
      });
    }
  }
  tabClicked(evt: any){
    this.navParams = undefined;
    if(evt.target.textContent == "Services" && this.tabevent){
    this.tabRef.select(1);
    this.presentPopover(this.tabevent);
    }
    else{
      this.tabevent = undefined;
    }
  }


  setIndex(myEvent: any) {
    if (popover)
      popover.dismiss();
    if (myEvent.tabTitle == "Services" && !this.navParams && this.tab2 == null)
      this.presentPopover(myEvent)
    else {
      this.tab2 = null;
    }
  }
    

}

@Component({
  template: `
  <ion-content padding>
  <ion-list>        
      <button ion-item (click)="OpenPage('LaundryPage')">Laundry</button>
      <button ion-item (click)="OpenPage('GarmentsPage')">Garments</button>
      <button ion-item (click)="OpenPage('RealestatePage')">Real Estate</button>
      <button ion-item (click)="OpenPage('HealthcarePage')">Sericulture</button>
      <button ion-item (click)="OpenPage('FilmPage')">Film Distribution</button>
    </ion-list>
</ion-content>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController,public app: App, public nav: NavController) {}

  close() {
    this.viewCtrl.dismiss();
  }

  OpenPage(page: any){
    let data = { 'page': page };
    this.viewCtrl.dismiss(data);
    // let navLength = this.app.getActiveNav().length();
    // while(navLength > 1){
    //   this.app.getActiveNav().pop();
    //   navLength--;
    // }    
    // this.app.getActiveNav().push(page);
    //this.navCtrl.push(ServicesPage);
  }
}
