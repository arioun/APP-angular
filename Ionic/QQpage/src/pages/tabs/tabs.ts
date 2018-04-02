import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PersonPage } from "../person/person";
import { SubpagePage } from "../subpage/subpage";
import { QqPage } from "../qq/qq";
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SubpagePage;
  tab3Root = PersonPage;
  
  constructor() {

  }
}
