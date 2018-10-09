import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController, Tabs  } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { App } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ServicesPage } from '../services/services';
import { ContactPage } from '../contact/contact';
import { DashboardPage } from '../dashboard/dashboard';
import { ServiceslistPage } from '../serviceslist/serviceslist';
let popover: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public tab1: any = AboutPage;
public tab2: any = ServicesPage;
public tab3: any = ContactPage;
public default: any = DashboardPage;
public currPageIdx: any;
public tabevent: any;
public showhomepage: any = true;
@ViewChild('myTabs') tabRef: Tabs;
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public appCtrl: App) {

  }

  presentPopover(myEvent: any) {
    if(myEvent != undefined){
      this.tabevent = myEvent;     
      console.log("popover clicked");
      popover = this.popoverCtrl.create(ServiceslistPage,{},{cssClass:'popover-class'});
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

ServicesPop(myEvent: any) {
    
    this.presentPopover(myEvent);
  }

  setIndex(myEvent: any) {
    if (popover)
      popover.dismiss();        
    if(myEvent.tabTitle == "Services")
    this.presentPopover(myEvent)
  }

}


