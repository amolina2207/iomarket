import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MsgModalPage } from './msg-modal';

@NgModule({
  declarations: [
    MsgModalPage,
  ],
  imports: [
    IonicPageModule.forChild(MsgModalPage),
  ],
})
export class MsgModalPageModule {}
