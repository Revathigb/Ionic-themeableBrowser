import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Radiopage } from './radiopage';

@NgModule({
  declarations: [
    Radiopage,
  ],
  imports: [
    IonicPageModule.forChild(Radiopage),
  ],
  exports: [
    Radiopage
  ]
})
export class RadiopageModule {}
