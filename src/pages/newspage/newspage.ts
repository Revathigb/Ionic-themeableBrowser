import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
/**
 * Generated class for the Newspage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-newspage',
  templateUrl: 'newspage.html',
})
export class Newspage {

  constructor(public themeableBrowser: ThemeableBrowser, public platform: Platform) {
  }

  OpenBrowser() {
    this.platform.ready().then(() => {
      const options: ThemeableBrowserOptions = {

        statusbar: {
          color: ' #f0f0f0ff'
        },
        toolbar: {
          height: 44,
          color: '#f0f0f0ff'
        },
        title: {
          color: '#994d00',
        },
        backButton: {
          image: 'www/assets/images/backward.png',
          imagePressed: 'back_pressed',
          align: 'left',
          event: 'backPressed'
        },
        forwardButton: {
          image: 'www/assets/images/forward.png',
          imagePressed: 'forward_pressed',
          align: 'left',
          event: 'forwardPressed'
        },
        closeButton: {
          image: 'www/assets/images/close.png',
          align: 'left',
          event: 'closePressed'
        },
      }
      const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://ionic.io', '_blank', options);
      // browser.on("closePressed")
      //   .subscribe(() => {
      //     console.log("Close function: ");
      //   });

    })

  }

}
