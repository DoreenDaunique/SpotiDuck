import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PochettePage } from './pochette';

@NgModule({
  declarations: [
    PochettePage,
  ],
  imports: [
    IonicPageModule.forChild(PochettePage),
  ],
})
export class PochettePageModule {}
