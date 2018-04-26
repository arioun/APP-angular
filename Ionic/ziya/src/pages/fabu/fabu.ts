import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Directive } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { DetailPage } from "../detail/detail";
@IonicPage()
@Component({
  selector: 'page-fabu',
  templateUrl: 'fabu.html',
})
export class FabuPage {
  ngSwitch: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

item=[{
        name: '资产包转让',
        img: 'assets/imgs/money.png'
      },
      {
        name: '债权转让',
        img: 'assets/imgs/zqtrans.png'
      },
      {
        name: '固产转让',
        img: 'assets/imgs/gctrans.png'
      },
      {
        name: '商业保理',
        img: 'assets/imgs/sybaoxian.png'
      },
      {
        name: '典当担保',
        img: 'assets/imgs/danbao.png'
      },
      {
        name: '融资借贷',
        img: 'assets/imgs/rz.png'
      }, 
      {
        name: '悬赏信息',
        img: 'assets/imgs/xs.png'
      },
      {
        name: '尽职调查',
        img: 'assets/imgs/dc.png'
      }];

  openModal(i){
    let profileModal = this.modalCtrl.create(DetailPage, { name:i.name });
    profileModal.present();
  }
}
