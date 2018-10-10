// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { PopoverController, Tabs  } from 'ionic-angular';
// import { ViewChild } from '@angular/core';
// import { App } from 'ionic-angular';
// import { AboutPage } from '../about/about';
// import { ServicesPage } from '../services/services';
// import { ContactPage } from '../contact/contact';
// import { DashboardPage } from '../dashboard/dashboard';
// import { ServiceslistPage } from '../serviceslist/serviceslist';
// let popover: any;
// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {
// public tab1: any = AboutPage;
// public tab2: any = ServicesPage;
// public tab3: any = ContactPage;
// public default: any = DashboardPage;
// public currPageIdx: any;
// public tabevent: any;
// public showhomepage: any = true;
// @ViewChild('myTabs') tabRef: Tabs;
//   constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public appCtrl: App) {

//   }

//   presentPopover(myEvent: any) {
//     if(myEvent != undefined){
//       this.tabevent = myEvent;     
//       console.log("popover clicked");
//       popover = this.popoverCtrl.create(ServiceslistPage,{},{cssClass:'popover-class'});
//       popover.present({
//         ev: {target: myEvent.btn._elementRef.nativeElement}
//       });
//     }    
//   }

//   tabClicked(evt: any){
    
//     if(evt.target.textContent == "Services" && this.tabevent){
//     this.tabRef.select(1);
//     this.presentPopover(this.tabevent);
//     }
//     else{
//       this.tabevent = undefined;
//     }
//   }

// ServicesPop(myEvent: any) {
    
//     this.presentPopover(myEvent);
//   }

//   setIndex(myEvent: any) {
//     if (popover)
//       popover.dismiss();        
//     if(myEvent.tabTitle == "Services")
//     this.presentPopover(myEvent)
//   }

// }


import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';
import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
}
 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Basic root for our content view
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Home', pageName: 'DashboardPage', tabComponent: 'DashboardPage', index: 0 },
    { title: 'Services', pageName: 'ServicesPage', tabComponent: 'ServicesPage', index: 1 },
    { title: 'Contact', pageName: 'ContactPage', tabComponent: 'ContactPage', index: 2 },
    { title: 'About', pageName: 'AboutPage', tabComponent: 'AboutPage', index: 3 }
  ];
 
  constructor(public navCtrl: NavController) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
}


