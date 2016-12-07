import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  public menuRoot = TabsPage;
  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }

}
