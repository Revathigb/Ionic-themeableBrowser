import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mediapage } from './mediapage';

@NgModule({
  declarations: [
    Mediapage,
  ],
  imports: [
    IonicPageModule.forChild(Mediapage),
  ],
  exports: [
    Mediapage
  ]
})
export class MediapageModule {}
