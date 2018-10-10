import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ServicesPage } from '../services/services';
import { ContactPage } from '../contact/contact';
import { DashboardPage } from '../dashboard/dashboard';
import { ServiceslistPage } from '../serviceslist/serviceslist';

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
  // tab1Root: any = 'Tab1Page';
  // tab2Root: any = 'Tab2Page';
  myIndex: number;
 
  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }

  setIndex(event:any){
    console.log("Set index");
  }

  tabClicked(evt: any){
    console.log("tabClicked");    
  }

}
