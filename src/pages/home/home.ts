import { GetDataProvider } from "../../providers/get-data/get-data";
import { BDDObject } from "../../assets/data/typings";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  oeuvres= new Array<BDDObject>();
  codes;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private getdataprovider: GetDataProvider
  ) {
    this.codes = this.navParams.get('idal2');
    console.log(this.codes);
  }

  ionViewDidLoad() {
    this.getdataprovider.getDATA().subscribe(data => {
      this.oeuvres = data;
    });
  }

  


}
