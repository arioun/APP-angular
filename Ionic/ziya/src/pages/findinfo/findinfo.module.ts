import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindinfoPage } from './findinfo';

@NgModule({
  declarations: [
    FindinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(FindinfoPage),
  ],
})
export class FindinfoPageModule {}
