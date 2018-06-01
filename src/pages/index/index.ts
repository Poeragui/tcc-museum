import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'indexPage',
  templateUrl: 'index.html'
})
export class indexPage {

  constructor(public navCtrl: NavController) {

  }

  pageSuivante() {
    this.navCtrl.push(TabsPage);
  }

}
