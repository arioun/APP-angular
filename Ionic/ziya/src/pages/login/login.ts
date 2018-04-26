import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { ModalController } from 'ionic-angular';
import { SignupPage } from "../signup/signup";
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  backtohome(){
    this.viewCtrl.dismiss();
    
  }
  signup(){
    
    let modal = this.modalCtrl.create(SignupPage);
      modal.present();
    
  }
  gotohome(){
    this.navCtrl.push(HomePage);
  }
}
