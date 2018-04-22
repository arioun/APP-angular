import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-dialogue',
  templateUrl: 'dialogue.html',
})
export class DialoguePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
   // console.log(navParams.get('name'));
  }
  a = this.navParams.get('name');
  backtomessage(){
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
  
  
}
