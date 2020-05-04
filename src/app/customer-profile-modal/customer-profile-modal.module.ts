import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerProfileModalPageRoutingModule } from './customer-profile-modal-routing.module';

import { CustomerProfileModalPage } from './customer-profile-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerProfileModalPageRoutingModule
  ],
  declarations: [CustomerProfileModalPage]
})
export class CustomerProfileModalPageModule {}
