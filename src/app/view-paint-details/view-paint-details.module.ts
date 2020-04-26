import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPaintDetailsPageRoutingModule } from './view-paint-details-routing.module';

import { ViewPaintDetailsPage } from './view-paint-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPaintDetailsPageRoutingModule
  ],
  declarations: [ViewPaintDetailsPage]
})
export class ViewPaintDetailsPageModule {}
