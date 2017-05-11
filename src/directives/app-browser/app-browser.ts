import { Directive} from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';

/**
 * Generated class for the AppBrowserDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[app-browser]' // Attribute selector
})
export class AppBrowserDirective {



  constructor(public navParams: NavParams, public themeableBrowser: ThemeableBrowser, public platform: Platform) {
    console.log('Hello AppBrowserDirective Directive');
    //  this.link = el.nativeElement.value;

  }


  appbrowserurl(value) {
    //  console.log(value);
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

      const browser: ThemeableBrowserObject = this.themeableBrowser.create(value, '_blank', options);
    })

  }
}
