import { Component, OnInit,EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
	@Output() event =new EventEmitter();
  content='';
	addData(){
		console.log(this.content);
    this.event.emit(this.content);
    this.content='';
	}
	
}
