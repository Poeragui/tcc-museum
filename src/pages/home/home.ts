import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as data from '../../oeuvres.json' ;


const lists = (<any>data).first_name;
const last = (<any>data).last_name;
const code = (<any>data).code_oeuvre;

console.log(lists);
console.log(last);
console.log(code);

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lists = (<any>data).first_name;
  first_name: string;
  last = (<any>data).last_name;
  last_name: string;
  code = (<any>data).code_oeuvre;
  code_oeuvre: string;
 
  constructor(public navCtrl: NavController,) {
  
  }

}
