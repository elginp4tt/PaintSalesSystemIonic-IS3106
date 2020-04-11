import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNewPaintPageRoutingModule } from './create-new-paint-routing.module';

import { CreateNewPaintPage } from './create-new-paint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateNewPaintPageRoutingModule
  ],
  declarations: [CreateNewPaintPage]
})
export class CreateNewPaintPageModule {}
