import { Injectable } from '@angular/core';

@Injectable()
export class GetDataServiceService {

  constructor() { }
  list:any;
  addData(key:string,data:any){
    localStorage.setItem(key,data);
  }

  showData(key){
    this.list=localStorage.getItem(key);
    return this.list;
  }
}
