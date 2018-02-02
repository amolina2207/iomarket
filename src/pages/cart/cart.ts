import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckOutPage } from '../check-out/check-out';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { BasePage } from '../base/base';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage extends BasePage {

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public authProvider: AuthProvider) {
    super(authProvider);
    console.log("constructor: CartPage");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter CartPage"); 
  }

   items=[
    {img:'assets/img/001.pn',title:'Green Apple',count:500,oldCost:'200',cost:'150',offer:10}/*,
    {img:'assets/img/002.pn',title:'Red Meat',count:2,oldCost:'150',cost:'150',offer:0},
    {img:'assets/img/009.pn',title:'Croissant',count:1,oldCost:'150',cost:'150',offer:0},
    {img:'assets/img/008.pn',title:'Carrots',count:2,oldCost:'150',cost:'150',offer:0},*/
  ];

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