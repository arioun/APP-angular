import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';
import { Http, Jsonp, Headers } from '@angular/http';

import { AlertController } from 'ionic-angular';
import { PersonPage } from '../person/person';

/**
 * Generated class for the QqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qq',
  templateUrl: 'qq.html',
})
export class QqPage {

  @ViewChild(List) list: List;
  constructor(public http: Http, public jsonp: Jsonp, public navCtrl: NavController, public alertCtrl: AlertController) { }
  headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  arr = [];
  username;
  password;
  ngOnInit() {
    this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK')
      .subscribe(data => {
        this.arr = data['_body'];
        console.log(this.arr);
        console.log(data);
      });
  }
  data;
  login() {
    this.http.post(
      'http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID=' + this.username + '&password=' + this.password,
      JSON.stringify({}), { headers: this.headers })
      .subscribe(data => {
        this.data = data['_body'];
        if (this.data == 0) {
          let alert = this.alertCtrl.create({
            title: '',
            subTitle: '用户名与密码不符!',
            buttons: [' 确定']
          });
          alert.present();
        }
        else if (this.data == 2) {
          let alert = this.alertCtrl.create({
            title: '',
            subTitle: '用户名不存在!',
            buttons: ['确定']
          });
          alert.present();
        }
        else {
          this.navCtrl.push(PersonPage, { 'name': 'name' });
        }
      });
    console.log(this.password);
    console.log(this.username);
  }
  goSub() {
    this.navCtrl.push(PersonPage, { 'name': 'name' });

  }

}
