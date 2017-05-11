import { Component, NgModule, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { AppBrowserDirective } from '../../directives/app-browser/app-browser';




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

  public resources;
  @ViewChild(AppBrowserDirective) AppBrowserDirective;
  constructor(public platform: Platform) {
    // this.resources = [
    //   {name: "google", url: "www.google.com"},
    //   {name: "facebook", url: "www.facebook.com"},
    //   {name: "yahoo", url: "www.yahoo.com"}
    // ]
  }


  click(url) {
    this.AppBrowserDirective.appbrowserurl(url);                 ///<<@@@ no need to use nativeElement
  }

}
