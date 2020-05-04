import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDeliveryPageRoutingModule } from './update-delivery-routing.module';

import { UpdateDeliveryPage } from './update-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDeliveryPageRoutingModule
  ],
  declarations: [UpdateDeliveryPage]
})
export class UpdateDeliveryPageModule {}
