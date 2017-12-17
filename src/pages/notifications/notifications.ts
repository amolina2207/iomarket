import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { SignInPage } from '../sign-in/sign-in';
import { MsgModalPage } from '../msg-modal/msg-modal';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  items=[
    {day:'10',month:'Feb',time:'10Am',event:'Soon the new offer of the next week'},
    {day:'30',month:'Jan',time:'10Am',event:'20 % discount on all our products check now'},
    {day:'10',month:'Jan',time:'10Am',event:'Announcement'}
  ]

  num: number;

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

  logout(){
  	this.navCtrl.setRoot(SignInPage);
  }

  readMsg(item){
    item.num=1;
  }

  openModal(){
    let modal = this.modalCtrl.create(MsgModalPage);
    modal.present();
  }
}
