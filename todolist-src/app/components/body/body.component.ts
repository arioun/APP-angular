import { Component, OnInit,Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }
	ngOnInit() {}
  @Input() tolist=[];
 
  comlist = [];
  delData(i) {
    this.tolist.splice(i, 1);
  }
  change(i) {
    this.comlist.push(this.tolist[i])
    this.tolist.splice(i, 1);
    
  }
  delData2(i) {
    this.comlist.splice(i, 1);
  }
  change2(i) {
    this.tolist.push(this.comlist[i])
    this.comlist.splice(i, 1);
  }
}
