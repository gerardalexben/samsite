import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { AboutPageModule } from '../pages/about/about.module';
import { ServicesPage } from '../pages/services/services';
import { ServicesPageModule } from '../pages/services/services.module';
import { ContactPage } from '../pages/contact/contact';
import { ContactPageModule } from '../pages/contact/contact.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ServiceslistPageModule } from '../pages/serviceslist/serviceslist.module';
import { ServiceslistPage } from '../pages/serviceslist/serviceslist';
import { LaundryPageModule } from '../pages/laundry/laundry.module';
import { LaundryPage } from '../pages/laundry/laundry';
import { GarmentsPage } from '../pages/garments/garments';
import { GarmentsPageModule } from '../pages/garments/garments.module';
import { FilmPage } from '../pages/film/film';
import { FilmPageModule } from '../pages/film/film.module';
import { RealestatePage } from '../pages/realestate/realestate';
import { RealestatePageModule } from '../pages/realestate/realestate.module';
import { HealthcarePage } from '../pages/healthcare/healthcare';
import { HealthcarePageModule } from '../pages/healthcare/healthcare.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AboutPageModule,
    ServicesPageModule,
    ContactPageModule,
    DashboardPageModule,
    ServiceslistPageModule, 
    LaundryPageModule,
    GarmentsPageModule,
    FilmPageModule,
    RealestatePageModule,
    HealthcarePageModule,
    TabsPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ServicesPage,
    ContactPage,
    DashboardPage,
    ServiceslistPage,
    LaundryPage,
    GarmentsPage,
    FilmPage,
    RealestatePage,
    HealthcarePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
