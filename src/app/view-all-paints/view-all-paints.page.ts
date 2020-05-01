import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


import { PaintService } from '../paint.service';
import { Paint } from '../paint';
import { FilterPaintsByCategoriesModalPage } from '../filter-paints-by-categories-modal/filter-paints-by-categories-modal.page';
import { isRegExp } from 'util';
import { PaintCategory } from '../paint-category';
import { FilterPaintsByTagsModalPage } from '../filter-paints-by-tags-modal/filter-paints-by-tags-modal.page';
import { PaintTag } from '../paint-tag';


@Component({
  selector: 'app-view-all-paints',
  templateUrl: './view-all-paints.page.html',
  styleUrls: ['./view-all-paints.page.scss'],
})
export class ViewAllPaintsPage implements OnInit {
	
	paints: Paint[];
    errorMessage: string;
    paintsFilteredByCategory: Paint[] = [];
    paintsFilteredByTags: Paint[] = [];

    constructor(private paintService: PaintService,
                private router: Router,
                private modalController: ModalController) 
    {		
	}


	ngOnInit() {
		this.refreshPaints();
    }
    
    ionViewWillEnter() {
        console.log("ionViewWillEnter");

        this.refreshPaints();
    }

    viewPaintDetails(event, paint) {
        this.router.navigate(["/viewPaintDetails/" + paint.paintId]);
    }

    refreshPaints() {
        if(this.paintsFilteredByCategory.length == 0 && this.paintsFilteredByTags.length == 0) {
            this.paintService.getPaints().subscribe(
                response => {
                    this.paints = response.paints
                },
                error => {
                    this.errorMessage = error   
                }
            ); 
        } else {
            if (this.paintsFilteredByCategory.length != 0) {
                this.paints = this.paintsFilteredByCategory;
            }
            else if (this.paintsFilteredByTags.length != 0) {
                this.paints = this.paintsFilteredByTags;
            }
        }

        console.log("Paints filtered by category");
        console.log(this.paintsFilteredByCategory);

        
    }

    async presentFilterPaintsByCategoriesModal() {
        const filterPaintsByCategoriesModal = await this.modalController.create({
            component: FilterPaintsByCategoriesModalPage,
        });

        filterPaintsByCategoriesModal.onDidDismiss().then((event) => {
            let filteredCategoryIds: number[] = event.data.filteredCategoryIds;

            //iterate over all paints
            for (var i = 0; i < this.paints.length; i++) {
                //get each paint's categories
                let pc: PaintCategory[] = this.paints[i].paintCategories;
                //check if the selected categories are found 
                for (var j = 0; j < pc.length; j++) {
                    var selectedId = pc[j].paintCategoryId;
                    if (filteredCategoryIds.includes(selectedId)){
                        var selectedPaint = this.paints[i];
                        // check if paint is already in the selected array
                        if (!this.paintsFilteredByCategory.includes(selectedPaint)) {
                            this.paintsFilteredByCategory.push(this.paints[i]);
                        }
                    }
                }
            }

            this.refreshPaints();
        })

        return await filterPaintsByCategoriesModal.present();
    }

    async presentFilterPaintsByTagsModal() {
        const filterPaintsByTagsModal = await this.modalController.create({
            component: FilterPaintsByTagsModalPage,
        });

        filterPaintsByTagsModal.onDidDismiss().then((event) => {
            let filteredTagIds: number[] = event.data.filteredTagIds;

            //iterate over all paints
            for (var i = 0; i < this.paints.length; i++) {
                //get each paint's tags
                let pt: PaintTag[] = this.paints[i].tags;
                //check if the selected categories are found 
                for (var j = 0; j < pt.length; j++) {
                    var selectedId = pt[j].tagId;
                    if (filteredTagIds.includes(selectedId)){
                        var selectedPaint = this.paints[i];
                        // check if paint is already in the selected array
                        if (!this.paintsFilteredByTags.includes(selectedPaint)) {
                            this.paintsFilteredByTags.push(this.paints[i]);
                        }
                    }
                }
            }

            this.refreshPaints();
        })

        return await filterPaintsByTagsModal.present();
    }

    reset() {
        this.paintService.getPaints().subscribe(
            response => {
                this.paints = response.paints
            },
            error => {
                this.errorMessage = error   
            }
        ); 

        this.paintsFilteredByCategory = [];
        this.paintsFilteredByTags =[];
    }
}
