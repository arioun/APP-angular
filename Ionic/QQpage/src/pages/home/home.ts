import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubpagePage } from '../subpage/subpage';
import { PersonPage } from "../person/person";
import { QqPage } from "../qq/qq";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
goSub(){
  this.navCtrl.push(SubpagePage,{name:'liu'});
}
goQq(){
  this.navCtrl.push(QqPage);
}

}
