import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { BasePage } from '../base/base';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage extends BasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider, public storage: Storage) {
  	super(authProvider);
  }

 

}
