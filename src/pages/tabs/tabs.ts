import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, PopoverController, Tabs } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ServicesPage } from '../services/services';
import { ContactPage } from '../contact/contact';
import { DashboardPage } from '../dashboard/dashboard';
import { ServiceslistPage } from '../serviceslist/serviceslist';
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
  public tab2: any = ServicesPage;
  public tab3: any = ContactPage;
  public default: any = DashboardPage;
  public tabevent: any;
  myIndex: number;
 pageName: any;
 @ViewChild('myTabs') tabRef: Tabs;
 
  constructor(public navParams: NavParams, public app: App, public popoverCtrl: PopoverController) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
    //if(navParams.data.pageName != undefined)
    this.pageName = {pageName: navParams.data.pageName};
    
  }
   presentPopover(myEvent: any) {
    if(myEvent != undefined){
      this.tabevent = myEvent;     
      console.log("popover clicked");
      popover = this.popoverCtrl.create(ServiceslistPage);
      popover.present({
        ev: {target: myEvent.btn._elementRef.nativeElement}
      });
    }    
  }
  tabClicked(evt: any){
    
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
    if(myEvent.tabTitle == "Services")
    this.presentPopover(myEvent)
  }

}
