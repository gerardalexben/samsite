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


import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, App, Events } from 'ionic-angular';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  children?:any;
}
 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Basic root for our content view
  rootPage:string;
  public servicesMap = [{ index: 1, page: 'LaundryPage' },
  { index: 2, page: 'GarmentsPage' },
  { index: 3, page: 'RealestatePage' },
  { index: 4, page: 'HealthcarePage' },
  { index: 5, page: 'FilmPage' }];
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Home', pageName: 'DashboardPage', tabComponent: 'DashboardPage', index: 0, children:[] },
    { title: 'Services', pageName: 'ServicesPage', tabComponent: 'ServicesPage', index: 1,
     children:[{name:'Laundry', pageName:'LaundryPage'},{name:'Garments', pageName:'GarmentsPage'},{name:'Real Estate', pageName:'RealestatePage'},{name:'Sericulture', pageName:'HealthcarePage'},{name:'Film Distribution', pageName:'FilmPage'}] },
    // { title: 'Contact', pageName: 'ContactPage', tabComponent: 'ContactPage', index: 2, children:[] },
    { title: 'About Us', pageName: 'AboutPage', tabComponent: 'AboutPage', index: 3, children:[] }
  ];
 
  constructor(public navCtrl: NavController, public app: App, public events: Events) {
    events.subscribe('slide:clicked', (id) => {
      if(id == "contact"){      
      setTimeout(() => { this.nav.setRoot('AboutPage'); }, 100)
      }
      else{
      console.log('Welcome', id);
      let page = this.servicesMap.find(pgs => pgs.index == id).page;
      this.nav.setRoot(page);
      }
    });
   }

  ngOnInit(){
    if(window.innerWidth > 800)
    this.rootPage = 'TabsPage';
    else
    this.rootPage = 'DashboardPage';

  }
 
  openPage(page: PageInterface) {
    let params = {};
    let childIndexSet: boolean = false;
    let idx: any;
    if(page.index == undefined)
    idx = 1;
    else
    idx = page.index;

    

    //fill index for children
    if (page.index == undefined){
      childIndexSet = true;
      params = { tabIndex: idx, pageName:page.pageName };
    }

    else{
      params = { tabIndex: idx };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && idx != undefined && !childIndexSet) {
      this.nav.getActiveChildNav().select(idx);      
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      if (this.rootPage == 'TabsPage')
        this.nav.setRoot(this.rootPage, params);
      else{
        this.nav.setRoot(page.pageName);        
      }
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


