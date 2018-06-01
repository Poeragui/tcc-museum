import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html'
})
export class QrcodePage {
result: BarcodeScanResult;
  constructor(public navCtrl: NavController, public navParams: NavParams, private bcs: BarcodeScanner,private toastCtrl: ToastController) {
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
      })
      .catch(err =>{
        this.toastCtrl.create({
          message:err.message
        }).present();
      })
  }
}
