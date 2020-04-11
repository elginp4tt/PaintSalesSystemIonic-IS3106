import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllPaintsPageRoutingModule } from './view-all-paints-routing.module';

import { ViewAllPaintsPage } from './view-all-paints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllPaintsPageRoutingModule
  ],
  declarations: [ViewAllPaintsPage]
})
export class ViewAllPaintsPageModule {}
