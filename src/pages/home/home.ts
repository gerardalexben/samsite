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
@ViewChild('myTabs') tabRef: Tabs;
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public appCtrl: App) {

  }

  presentPopover(myEvent) {
    this.tabevent = myEvent;     
    console.log("popover clicked");
    let popover = this.popoverCtrl.create(ServiceslistPage,{},{cssClass:'popover-class'});
    popover.present({
      ev: {target: myEvent.btn._elementRef.nativeElement}
    });
  }

  tabClicked(evt: any){
    if(this.currPageIdx == 2 && evt.target.textContent == "Services")
    this.presentPopover(this.tabevent);
  }

  setIndex(myEvent: any) {
    this.currPageIdx = this.tabRef.getSelected().index;
    console.log(this.currPageIdx);
    if(this.currPageIdx == 2)
    this.presentPopover(myEvent)
  }
  
}

