import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { QrcodePage } from '../qrcode/qrcode';
import {indexPage } from '../index/index';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  tab1Root = HomePage;
  tab3Root = AboutPage;
  tab2Root = QrcodePage;
  
  constructor() {

  }
}
