import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllTransactionsPageRoutingModule } from './view-all-transactions-routing.module';

import { ViewAllTransactionsPage } from './view-all-transactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllTransactionsPageRoutingModule
  ],
  declarations: [ViewAllTransactionsPage]
})
export class ViewAllTransactionsPageModule {}
