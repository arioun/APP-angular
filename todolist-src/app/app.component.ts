import { Component,EventEmitter, Input, Output } from '@angular/core';
import { GetDataServiceService } from './services/get-data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public getlocaldata: GetDataServiceService) { }
  head_data=[];
  getData(event){
    this.head_data.push(event);
    this.getlocaldata.addData('d1',this.head_data);
  }
  data;
  
  ngOnInit(){
    this.data=(this.getlocaldata.showData('d1')).split(',');
    if(this.data!=''){
      this.head_data=this.data;
    }
  }
  
}
