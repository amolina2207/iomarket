import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SignInPage } from '../sign-in/sign-in';

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
export class CheckOutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckOutPage');
  }

  items=[
    {img:'assets/img/visa.png'},
    {img:'assets/img/paypal.png'},
    {img:'assets/img/master.png'},
  ]
  
  activeVisa = null;

  logout(){
  	this.storage.remove('currentUser').then((val) => {
    	this.navCtrl.setRoot(SignInPage).then((val) => {
        console.log('setRoot(SignInPage)');
      });
  	});
  }

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