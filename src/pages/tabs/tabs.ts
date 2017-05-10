import { Component } from '@angular/core';
import { Mediapage } from '../mediapage/mediapage';
import { Radiopage } from '../radiopage/radiopage';
import { Newspage } from '../newspage/newspage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Newspage;
  tab2Root = Radiopage;
  tab3Root = Mediapage;


  constructor() {

  }
}
