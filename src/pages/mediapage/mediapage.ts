import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicModule, Platform} from 'ionic-angular';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';


/**
 * Generated class for the Mediapage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mediapage',
  templateUrl: 'mediapage.html',
})
export class Mediapage {
  // var cordova: any;

  constructor(public themeableBrowser: ThemeableBrowser, public platform: Platform) {


  }
  openUrl() {


    this.platform.ready().then(() => {
      const options: ThemeableBrowserOptions = {
        statusbar: {
          color: ' #f0f0f0ff'
        },
        // toolbar: {
        //   height: 44,
        //   color: '#f0f0f0ff'
        // },
        title: {
          color: '#994d00',
          staticText: ""
        },
        closeButton: {
          image: 'assets/images/close-icon-29.png',
          imagePressed: 'close_button',
          align: 'left',
          event: 'closePressed'
        },

        transitionstyle: 'fliphorizontal',
        presentationstyle: 'pagesheet',
        allowInlineMediaPlayback: 'yes',
        toolbarposition: 'bottom',
        closebuttoncaption: 'Return to HomePage'
      }




      this.themeableBrowser.create('https://ionic.io', '_blank', options);

    })

  }
}
