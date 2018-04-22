import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  }
  
  backtofabu(){
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
}
