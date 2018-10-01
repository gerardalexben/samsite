import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GarmentsPage } from './garments';

@NgModule({
  declarations: [
    GarmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(GarmentsPage),
  ],
})
export class GarmentsPageModule {}
