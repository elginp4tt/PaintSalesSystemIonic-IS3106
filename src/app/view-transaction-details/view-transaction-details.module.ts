import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTransactionDetailsPageRoutingModule } from './view-transaction-details-routing.module';

import { ViewTransactionDetailsPage } from './view-transaction-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTransactionDetailsPageRoutingModule
  ],
  declarations: [ViewTransactionDetailsPage]
})
export class ViewTransactionDetailsPageModule {}
