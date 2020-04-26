import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDeliveryServiceDetailsPageRoutingModule } from './view-delivery-service-details-routing.module';

import { ViewDeliveryServiceDetailsPage } from './view-delivery-service-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDeliveryServiceDetailsPageRoutingModule
  ],
  declarations: [ViewDeliveryServiceDetailsPage]
})
export class ViewDeliveryServiceDetailsPageModule {}
