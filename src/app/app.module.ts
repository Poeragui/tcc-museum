import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { indexPage } from '../pages/index/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { GetDataProvider } from '../providers/get-data/get-data';
import { HttpClientModule } from "@angular/common/http";
import { Camera } from '@ionic-native/camera';
import {InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    QrcodePage,
    indexPage
  ],

  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    indexPage,
    HomePage,
    TabsPage,
    QrcodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    GetDataProvider,
    Camera,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
