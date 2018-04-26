import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Directive } from '@angular/core';
import { DialoguePage } from "../dialogue/dialogue";
@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  items = [{
    name: '唐教授',
    img: 'assets/imgs/touxiang.png',
    text:'不良资产是指企业的资产尚未处理清楚',
    time:'3:43 pm'
  }, 
  {
    name: '李教授',
      img: 'assets/imgs/touxiang.png',
      text: '不良资产是指企业的资产尚未处理清楚',
      time: '3:43 pm'
    },
  {
    name: '王教授',
      img: 'assets/imgs/touxiang.png',
      text: '不良资产是指企业的资产尚未处理清楚',
      time: '3:43 pm'
  },
    {
      name: '孙教授',
      img: 'assets/imgs/touxiang.png',
      text: '不良资产是指企业的资产尚未处理清楚',
      time: '3:43 pm'
    },
  ];

  openModal(item){
    
    
    let profileModal = this.modalCtrl.create(DialoguePage, { name:item.name });
    console.log(profileModal);
    profileModal.present();
  }
}
