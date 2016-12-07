import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, Keyboard } from 'ionic-native';
import { MenuPage } from '../pages/menu/menu';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = MenuPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      Keyboard.disableScroll(true);
      // StatusBar.backgroundColorByName('red');
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
