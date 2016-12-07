import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {
  constructor(public viewCtrl: ViewController) {
    // this.viewCtrl.onDidDismiss(() => {
    //   console.log('good');
    // });
  }
  close() {
    this.viewCtrl.dismiss();
  }

}
