import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { BasePage } from '../base/base';
import { Product } from '../../models/product';
import { FileChooser } from '@ionic-native/file-chooser';

/**
 * Generated class for the ManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-management',
  templateUrl: 'management.html',
})
export class ManagementPage  extends BasePage{

  product: Product = new Product();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authProvider: AuthProvider,
              public storage: Storage,
              private fileChooser: FileChooser) {
    super(authProvider);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagementPage');
  }

  saveProduct(){
  	console.log(JSON.stringify(this.product));
  }

  chooseFile(){
    console.log("chooseFile...");
    this.fileChooser.open()
      .then(uri => console.log(uri))
      .catch(e => console.log(e));
  }
}
