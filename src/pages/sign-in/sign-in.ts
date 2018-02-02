import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { AuthProvider } from '../../providers/auth/auth';
import { SignIn } from '../../models/sign-in';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  signin: SignIn = new SignIn();
  messages: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {}

  goToSignUp(){
    this.navCtrl.push(SignUpPage);
  }

  login(){
    console.log("signin="+JSON.stringify(this.signin));
    this.messages = [];
    this.auth.login(this.signin).subscribe(
      token => {
        console.log("Login: OK");
      },
      error => {
        console.log("Login: NOK");
        this.messages.push("Failed SignIn");
        console.log(error);
      }
    );
  }

}