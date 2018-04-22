import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MinePage } from "../mine/mine";
import { LoginPage } from "../login/login";
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    
  }
  backtomine(){
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
    
  }
  backtologin(){
    this.navCtrl.push(LoginPage);
  }
}
