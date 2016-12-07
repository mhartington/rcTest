import { Component } from '@angular/core';
import { ModalPage } from '../modal/modal';
import {
  NavController,
  ModalController,
  PopoverController,
  Platform
} from 'ionic-angular';

import { AboutPage } from '../about/about';
import { FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Keyboard } from 'ionic-native';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public form = this.fb.group({
    myDate: ['1994-12-15T13:47:20.789Z']
  });
  public color = '';
  public testNumber = 0;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public fb: FormBuilder,
    public storage: Storage,
    public popoverCtrl: PopoverController,
    public platform: Platform
  ) {
    this.platform.pause.subscribe(
      (e) => console.log('pause', e)
    );
    this.platform.resume.subscribe(
      (e) => console.log('resume', e)
    );

    Keyboard.onKeyboardHide().subscribe(
      ev => console.log('hide', Date.now())
    );
    Keyboard.onKeyboardShow().subscribe(
      ev => console.log('show', Date.now())
    );
  }
  pushPage() {
    this.navCtrl.push(AboutPage, {}, {
      animation: 'md-transition'
    }, () => console.log('done'));
  }
  showModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
  showPopover(event) {
    let popover = this.popoverCtrl.create(ModalPage);
    popover.present({
      ev: event
    });
  }
  setKey() {
    this.storage.set('name', 'Max');
  }
  getKey() {
    this.storage.keys().then((res) => {
      console.log(res);
    });
  }
  logValue(value) {
    console.log(value);
  }

}
