import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniInfoPageRoutingModule } from './uni-info-routing.module';

import { UniInfoPage } from './uni-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniInfoPageRoutingModule
  ],
  declarations: [UniInfoPage]
})
export class UniInfoPageModule {}
