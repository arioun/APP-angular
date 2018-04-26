import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  name: 'page-user',
  segment: 'path-user',
  priority: 'off'
})
@Component({
  selector: 'page-findinfo',
  templateUrl: 'findinfo.html',
})
export class FindinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  backtohome() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss();

  }
  temp: string;
  acco(index, temp) {
    this.temp = temp + index;

  }
  aa;
  cl(i){
    this.aa = i;
    console.log(this.aa)
  }
  items1=[
    {name:"信息类型",
      
      type:[
        {name:"资产包转让"},
        { name: "债权转让" },
        { name: "固产转让" },
        { name: "法律服务" },
        { name: "商业保险" },
    ],
    },
    { name: "地区" ,
      type: [
        { name: "北京" },
        { name: "上海" },
        { name: "广州" },
        { name: "河北" },
        { name: "云南" },
      ],
    },
    { name: "更多" ,
      type:[
        { name: "抵押" },
        { name: "信用" },
        { name: "综合类" },
      ],  
    },
  ];

  items2 = [{
    name: '地区：北京',
    source: '银行',
    namelist: '资产包转让',
    moneyName: '资金',
    money: '100万'
  },
  {
    name: '地区：北京',
    source: '类型：借贷',
    namelist: '委外催收',
    moneyName: '合购金额',
    money: '500万'
  },
  {
    name: '地区：北京',
    source: '买方性质：国企',
    namelist: '商业保理',
    moneyName: '资金',
    money: '500万'
  },
    {
      name: '地区：北京',
      source: '银行',
      namelist: '资产包转让',
      moneyName: '资金',
      money: '100万'
    },
    {
      name: '地区：北京',
      source: '类型：借贷',
      namelist: '委外催收',
      moneyName: '合购金额',
      money: '500万'
    },
    {
      name: '地区：北京',
      source: '买方性质：国企',
      namelist: '商业保理',
      moneyName: '资金',
      money: '500万'
    }];
 
}
