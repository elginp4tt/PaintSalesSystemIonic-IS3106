import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPaintServiceDetailsPageRoutingModule } from './view-paint-service-details-routing.module';

import { ViewPaintServiceDetailsPage } from './view-paint-service-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPaintServiceDetailsPageRoutingModule
  ],
  declarations: [ViewPaintServiceDetailsPage]
})
export class ViewPaintServiceDetailsPageModule {}
