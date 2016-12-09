import { Component } from '@angular/core';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items = [];

  constructor() {
    for (let i = 0; i < 400; i++) {
      this.items.push({
        name: i,
        value: false,
        img: `http://placekitten.com/60/${55 + (i % 10)}`
      });
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push(i);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  logValue(item) {
    console.log(item);
  }
}
