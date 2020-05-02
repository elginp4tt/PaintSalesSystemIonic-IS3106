import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterPaintsByTagsModalPageRoutingModule } from './filter-paints-by-tags-modal-routing.module';

import { FilterPaintsByTagsModalPage } from './filter-paints-by-tags-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterPaintsByTagsModalPageRoutingModule
  ],
  declarations: [FilterPaintsByTagsModalPage]
})
export class FilterPaintsByTagsModalPageModule {}
