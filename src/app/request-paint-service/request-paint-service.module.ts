import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestPaintServicePageRoutingModule } from './request-paint-service-routing.module';

import { RequestPaintServicePage } from './request-paint-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestPaintServicePageRoutingModule
  ],
  declarations: [RequestPaintServicePage]
})
export class RequestPaintServicePageModule {}
