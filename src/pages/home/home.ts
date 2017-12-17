import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CartPage } from '../cart/cart';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	category: string;

  constructor(public navCtrl: NavController, private storage: Storage) {}

  items=[
    {img:'assets/img/001.png',title:'Green Apple',weight:'500gm',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/002.png',title:'Red Meat',weight:'1K',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/003.png',title:'Bakery',weight:'500gm',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/004.png',title:'Cheese',weight:'250gm',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/001.png',title:'Green Apple',weight:'500gm',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/002.png',title:'Red Meat',weight:'1K',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/003.png',title:'Bakery',weight:'500gm',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/004.png',title:'Cheese',weight:'250gm',oldCost:'200',cost:'150',offer:10},
  ]
vegetables=[
    {img:'assets/img/001.png',title:'Green Apple',weight:'500gm',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/006.png',title:'Tomato',weight:'1K',oldCost:'0',cost:'150',offer:0},
    {img:'assets/img/007.png',title:'colered pepper',weight:'500gm',oldCost:'200',cost:'150',offer:0},
    {img:'assets/img/008.png',title:'carot',weight:'250gm',oldCost:'0',cost:'150',offer:0},
    {img:'assets/img/001.png',title:'Green Apple',weight:'500gm',oldCost:'0',cost:'150',offer:0},
    {img:'assets/img/006.png',title:'Tomato',weight:'1K',oldCost:'0',cost:'150',offer:0},
    {img:'assets/img/007.png',title:'colered pepper',weight:'500gm',oldCost:'0',cost:'150',offer:0},
    {img:'assets/img/008.png',title:'carot',weight:'250gm',oldCost:'0',cost:'150',offer:0},
  ]

  meats=[
    
    {img:'assets/img/002.png',title:'Red Meat',weight:'1K',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/001.png',title:'Green Apple',weight:'500gm',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/006.png',title:'Tomato',weight:'1K',oldCost:'0',cost:'150',offer:0},
    {img:'assets/img/002.png',title:'Red Meat',weight:'1K',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/001.png',title:'Green Apple',weight:'500gm',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/006.png',title:'Tomato',weight:'1K',oldCost:'0',cost:'150',offer:0},
    {img:'assets/img/002.png',title:'Red Meat',weight:'1K',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/006.png',title:'Tomato',weight:'1K',oldCost:'0',cost:'150',offer:0},
    {img:'assets/img/007.png',title:'colered pepper',weight:'500gm',oldCost:'0',cost:'150',offer:0},
    {img:'assets/img/002.png',title:'Red Meat',weight:'1K',oldCost:'200',cost:'150',offer:10},
  ]

  bakery=[
    
    {img:'assets/img/003.png',title:'Bakery',weight:'500gm',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/009.png',title:'Croissant',weight:'500gm',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/006.png',title:'Tomato',weight:'1K',oldCost:'0',cost:'150',offer:0},
    {img:'assets/img/003.png',title:'Bakery',weight:'500gm',oldCost:'200',cost:'150',offer:10},
    {img:'assets/img/009.png',title:'Croissant',weight:'500gm',oldCost:'200',cost:'150',offer:10},
  ]

  logout(){
  	this.storage.remove('currentUser').then((val) => {
    	this.navCtrl.setRoot(SignInPage).then((val) => {
        console.log('setRoot(SignInPage)');
      });
  	});
  }

  addProductCart(){
    this.navCtrl.push(CartPage);
  }

}
