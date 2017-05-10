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


  constructor(public themeableBrowser: ThemeableBrowser, public platform: Platform) {


  }

  openUrl() {
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

        transitionstyle: 'fliphorizontal',
        toolbarposition: 'bottom',
        allowInlineMediaPlayback: 'yes',
        backButtonCanClose: true
      }
      var browser = this.themeableBrowser.create('http://thedailycougar.com/', '_blank', options);
      // browser.on("closePressed")
      //   .subscribe(() => {
      //     console.log("Close function: ");
      //   });

    })

  }
}
