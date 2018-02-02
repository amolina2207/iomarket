import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { SignUp } from '../../models/sign-up';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  signup: SignUp = new SignUp();
  messages: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  }

  signUp(){
    console.log("signUp="+JSON.stringify(this.signup));
    this.messages = [];
    this.auth.signup(this.signup).subscribe(
      token => {
        console.log("SignUp: OK");
      },
      error => {
        console.log("SignUp: NOK");
        this.messages.push("Failed SignUp");
        console.log(error);
      })
  }
}