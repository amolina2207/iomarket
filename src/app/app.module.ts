import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { SignInPage } from '../pages/sign-in/sign-in';
import { ShippingAddressPage } from '../pages/shipping-address/shipping-address';
import { SettingPage } from '../pages/setting/setting';
import { SearchPage } from '../pages/search/search';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MsgModalPage } from '../pages/msg-modal/msg-modal';
import { CheckOutPage } from '../pages/check-out/check-out';
import { CartPage } from '../pages/cart/cart';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthProvider } from '../providers/auth/auth';

var config = {
      backButtonText: '',
      iconMode: 'ios',
      mode:'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios',
    };

export function jwtOptionsFactory(storage: Storage) {
  return {
    tokenGetter: () => storage.get(AuthProvider.jwtTokenName),
    whitelistedDomains: ['localhost:9000']
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SignUpPage,
    SignInPage,
    ShippingAddressPage,
    SettingPage,
    SearchPage,
    NotificationsPage,
    MsgModalPage,
    CheckOutPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, config),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SignUpPage,
    SignInPage,
    ShippingAddressPage,
    SettingPage,
    SearchPage,
    NotificationsPage,
    MsgModalPage,
    CheckOutPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}