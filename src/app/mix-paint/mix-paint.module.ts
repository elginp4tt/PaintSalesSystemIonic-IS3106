import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MixPaintPageRoutingModule } from './mix-paint-routing.module';

import { MixPaintPage } from './mix-paint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MixPaintPageRoutingModule
  ],
  declarations: [MixPaintPage]
})
export class MixPaintPageModule {}
