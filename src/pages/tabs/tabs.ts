import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { NotificationsPage } from '../notifications/notifications';
import { CartPage } from '../cart/cart';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = NotificationsPage;
  tab4Root = CartPage;
  tab5Root = SettingPage;

  constructor() {
  }

}