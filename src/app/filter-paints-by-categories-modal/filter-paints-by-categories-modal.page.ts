import { Component, OnInit, Input } from '@angular/core';

import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular'
import { PaintCategory } from '../paint-category';
import { PaintCategoryService } from "../paint-category.service";
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter-paints-by-categories-modal',
  templateUrl: './filter-paints-by-categories-modal.page.html',
  styleUrls: ['./filter-paints-by-categories-modal.page.scss'],
})
export class FilterPaintsByCategoriesModalPage implements OnInit {

    paintCategoryToAdd: PaintCategory;
    paintCategories: PaintCategory[];
    errorMessage: string
    checkedCategories: boolean[];
    filteredCategoryIds: number[] = [];
    
    	
	constructor(private navParams: NavParams,
                private modalController : ModalController,
                private paintCategoryService: PaintCategoryService)
    {
    }

    ngOnInit() {
        this.paintCategoryService.getPaintCategories().subscribe(
            response => {
                this.paintCategories = response.paintCategories
            },
            error => {
                this.errorMessage = error
            }
        );
    }

    addToFilteredCategoriesList(event, paintCategory) {
        console.log(paintCategory.categoryName + " clicked");
        if (this.filteredCategoryIds.includes(paintCategory.paintCategoryId)){
            var categoryToRemove = this.filteredCategoryIds.indexOf(paintCategory.paintCategoryId);
            this.filteredCategoryIds.splice(categoryToRemove, 1);
        }else {
            this.filteredCategoryIds.push(paintCategory.paintCategoryId);
        }
        console.log(this.filteredCategoryIds);
    }

    public closeModal() {
        this.modalController.dismiss({
            'filteredCategoryIds': this.filteredCategoryIds
        });
        console.log(this.filteredCategoryIds);
    }

}
