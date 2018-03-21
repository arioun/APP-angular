import { Component, OnInit,Input,EventEmitter} from '@angular/core';
import { GetDataServiceService } from '../../services/get-data-service.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public getlocaldata: GetDataServiceService) { }
  b;
  d2;
  ngOnInit() {
   this.b=this.getlocaldata.showData('d2');
   this.d2=this.b.split(',');
   if(this.d2 !=''){
     this.comlist=this.d2;
   }
  }
  i;
  item;
  @Input() tolist = [];
  
  comlist = [];

  change(i) {
    this.comlist.push(this.tolist[i])
    this.tolist.splice(i, 1);
    
    this.getlocaldata.addData('d1',this.tolist);
    this.getlocaldata.addData('d2', this.comlist);
  }

  delData(i) {
    this.tolist.splice(i, 1);
    this.getlocaldata.addData('d1', this.tolist);
    this.getlocaldata.addData('d2', this.comlist);
  }
  

  change2(i) {
    this.tolist.push(this.comlist[i])
    this.comlist.splice(i, 1);
    this.getlocaldata.addData('d1', this.tolist);
    this.getlocaldata.addData('d2', this.comlist);
  }

  delData2(i) {
    this.comlist.splice(i, 1);
    this.getlocaldata.addData('d1', this.tolist);
    this.getlocaldata.addData('d2', this.comlist);
  }
}
