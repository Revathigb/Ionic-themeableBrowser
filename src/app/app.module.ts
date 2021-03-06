import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Mediapage } from '../pages/mediapage/mediapage';
import { TabsPage }  from '../pages/tabs/tabs';
import { Radiopage } from '../pages/radiopage/radiopage';
import { Newspage } from '../pages/newspage/newspage';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppBrowserDirective } from '../directives/app-browser/app-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Mediapage,
    TabsPage,
    Radiopage,
    Newspage,
    ListPage,
    AppBrowserDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Mediapage,
    Radiopage,
    TabsPage,
    Newspage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ThemeableBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
