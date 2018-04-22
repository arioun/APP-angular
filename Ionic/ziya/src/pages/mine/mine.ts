import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from "../setting/setting";
import { ModalController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  setting(){
    let modal = this.modalCtrl.create(SettingPage);
    modal.present();
  }


}
