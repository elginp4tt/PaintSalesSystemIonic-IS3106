import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterPaintsByCategoriesModalPageRoutingModule } from './filter-paints-by-categories-modal-routing.module';

import { FilterPaintsByCategoriesModalPage } from './filter-paints-by-categories-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterPaintsByCategoriesModalPageRoutingModule
  ],
  declarations: [FilterPaintsByCategoriesModalPage]
})
export class FilterPaintsByCategoriesModalPageModule {}
