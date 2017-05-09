import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Newspage } from './newspage';

@NgModule({
  declarations: [
    Newspage,
  ],
  imports: [
    IonicPageModule.forChild(Newspage),
  ],
  exports: [
    Newspage
  ]
})
export class NewspageModule {}
