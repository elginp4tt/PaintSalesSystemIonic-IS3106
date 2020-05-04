import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLoyaltyPointPageRoutingModule } from './view-loyalty-point-routing.module';

import { ViewLoyaltyPointPage } from './view-loyalty-point.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLoyaltyPointPageRoutingModule
  ],
  declarations: [ViewLoyaltyPointPage]
})
export class ViewLoyaltyPointPageModule {}
