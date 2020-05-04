import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllDeliveriesPageRoutingModule } from './view-all-deliveries-routing.module';

import { ViewAllDeliveriesPage } from './view-all-deliveries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllDeliveriesPageRoutingModule
  ],
  declarations: [ViewAllDeliveriesPage]
})
export class ViewAllDeliveriesPageModule {}
