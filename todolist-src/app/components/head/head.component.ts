import { Component, OnInit,EventEmitter, Input,Output } from '@angular/core';
import { GetDataServiceService } from '../../services/get-data-service.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(public getlocaldata: GetDataServiceService) { }

  ngOnInit() {}
  @Output() event =new EventEmitter();
  tolist=[];
  content='';
  item='';
	addData(){
    console.log(this.content);
    this.event.emit(this.content);
    this.tolist.push(this.content);
    this.content='';
    
	}
	
}
