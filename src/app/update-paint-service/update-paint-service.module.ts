import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePaintServicePageRoutingModule } from './update-paint-service-routing.module';

import { UpdatePaintServicePage } from './update-paint-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePaintServicePageRoutingModule
  ],
  declarations: [UpdatePaintServicePage]
})
export class UpdatePaintServicePageModule {}
