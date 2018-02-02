import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';
import { BasePage } from '../base/base';

/**
 * Generated class for the CheckOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html',
})
export class CheckOutPage extends BasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public authProvider: AuthProvider) {
    super(authProvider);
  }

  items=[
    {img:'assets/img/visa.png'},
    {img:'assets/img/paypal.png'},
    {img:'assets/img/master.png'},
  ]
  
  activeVisa = null;


	toggleActive(active) {
	    if (this.isClickedActive(active)) {
	        this.activeVisa = null;
	    } else {
	        this.activeVisa = active;
	    }
	}

	isClickedActive(active) {
    	return this.activeVisa === active;
	}

	switchTabs() {
		this.navCtrl.parent.select(0);
	}

}