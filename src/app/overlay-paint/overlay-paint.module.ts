import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverlayPaintPageRoutingModule } from './overlay-paint-routing.module';

import { OverlayPaintPage } from './overlay-paint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverlayPaintPageRoutingModule
  ],
  declarations: [OverlayPaintPage]
})
export class OverlayPaintPageModule {}
