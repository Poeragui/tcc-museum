import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import {InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html'
})
export class QrcodePage {
result: BarcodeScanResult;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
     private bcs: BarcodeScanner,
     private toastCtrl: ToastController, 
     private iap:InAppBrowser,
     ) {
  }
  
  ionViewWillEnter(){    
     this.scanBarcode();   
    }
  scanBarcode () {
    const options: BarcodeScannerOptions = {
      prompt: 'Pointer votre caméra vers un code barre',
      torchOn: false
    };
    this.bcs.scan (options)
      .then (res=>{
        this.result = res;
        this.iap.create ( 'https://www.google.com','_self', 'location=yes');

      })
    

      .catch(err =>{
        this.toastCtrl.create({
          message:err.message
        }).present();
      })
  }
}
