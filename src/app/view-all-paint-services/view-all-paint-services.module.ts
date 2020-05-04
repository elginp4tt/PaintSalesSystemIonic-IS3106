import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllPaintServicesPageRoutingModule } from './view-all-paint-services-routing.module';

import { ViewAllPaintServicesPage } from './view-all-paint-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllPaintServicesPageRoutingModule
  ],
  declarations: [ViewAllPaintServicesPage]
})
export class ViewAllPaintServicesPageModule {}
