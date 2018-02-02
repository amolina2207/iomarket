import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MsgModalPage } from '../msg-modal/msg-modal';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { BasePage } from '../base/base';
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
export class NotificationsPage extends BasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public authProvider: AuthProvider, public storage: Storage) {
    super(authProvider);
  }  

  items=[
    {day:'10',month:'Feb',time:'10Am',event:'Soon the new offer of the next week'},
    {day:'30',month:'Jan',time:'10Am',event:'20 % discount on all our products check now'},
    {day:'10',month:'Jan',time:'10Am',event:'Announcement'}
  ]

  num: number;

  readMsg(item){
    item.num=1;
  }

  openModal(){
    let modal = this.modalCtrl.create(MsgModalPage);
    modal.present();
  }
}