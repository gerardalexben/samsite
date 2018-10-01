import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceslistPage } from './serviceslist';

@NgModule({
  declarations: [
    ServiceslistPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceslistPage),
  ],
})
export class ServiceslistPageModule {}
