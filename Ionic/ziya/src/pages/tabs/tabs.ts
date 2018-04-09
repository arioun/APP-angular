import { Component } from '@angular/core';

import { FabuPage } from "../fabu/fabu";
import { LookPage } from "../look/look";
import { MessagePage } from "../message/message";
import { MinePage } from "../mine/mine";
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FabuPage;
  tab3Root = LookPage;
  tab4Root = MessagePage; 
  tab5Root = MinePage;
  constructor() {

  }
}
