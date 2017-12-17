import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SignInPage } from '../sign-in/sign-in';
import { CheckOutPage } from '../check-out/check-out';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

   items=[
    {img:'assets/img/001.png',title:'Green Apple',count:500,oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/002.png',title:'Red Meat',count:2,oldCost:'150',cost:'150',offer:0},
    {img:'assets/img/009.png',title:'Croissant',count:1,oldCost:'150',cost:'150',offer:0},
    {img:'assets/img/008.png',title:'Carrots',count:2,oldCost:'150',cost:'150',offer:0},
  ]

  logout(){
  	this.storage.remove('currentUser').then((val) => {
    	this.navCtrl.setRoot(SignInPage).then((val) => {
        console.log('setRoot(SignInPage)');
      });
  	});
  }

  removeItem(item){
  	let index = this.items.indexOf(item);
  	if(index > -1){
    	this.items.splice(index, 1);
    }
  }

	  // Counter Functions
	increment(item,$event){
	    $event.stopPropagation();
	    item.count += 1;
	}
  
	decrement(item,$event){
	    $event.stopPropagation();
	    item.count -= 1;
	    if(item.count<=0){
	        item.count=0;
	    }
 	}

	goToCheckOut(){
    	this.navCtrl.push(CheckOutPage);
	}

}