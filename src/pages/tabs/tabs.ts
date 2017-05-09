import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { Mediapage } from '../mediapage/mediapage';
import { Radiopage } from '../radiopage/radiopage';
import { Newspage } from '../newspage/newspage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Mediapage;
  tab2Root = Radiopage;
  tab3Root = Radiopage;


  constructor() {

  }
}
