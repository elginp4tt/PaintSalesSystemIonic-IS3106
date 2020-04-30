import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


import { PaintService } from '../paint.service';
import { Paint } from '../paint';
import { FilterPaintsByCategoriesModalPage } from '../filter-paints-by-categories-modal/filter-paints-by-categories-modal.page';
import { isRegExp } from 'util';
import { PaintCategory } from '../paint-category';


@Component({
  selector: 'app-view-all-paints',
  templateUrl: './view-all-paints.page.html',
  styleUrls: ['./view-all-paints.page.scss'],
})
export class ViewAllPaintsPage implements OnInit {
	
	paints: Paint[];
    errorMessage: string;
    paintsFilteredByCategory: Paint[] = [];

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
        if(this.paintsFilteredByCategory.length == 0) {
            this.paintService.getPaints().subscribe(
                response => {
                    this.paints = response.paints
                },
                error => {
                    this.errorMessage = error   
                }
            ); 
        } else {
            this.paints = this.paintsFilteredByCategory;
        }
        console.log("Paints filtered by category");
        console.log(this.paintsFilteredByCategory);

        
    }

    async presentFilterPaintsByCategoriesModal() {
        const filterPaintsByCategoriesModal = await this.modalController.create({
            component: FilterPaintsByCategoriesModalPage,
        });

        filterPaintsByCategoriesModal.onDidDismiss().then((event) => {
            console.log("received cat ids");
            console.log(event.data.filteredCategoryIds);
            let filteredCategoryIds: number[] = event.data.filteredCategoryIds;

            //iterate over all paints
            for (var i = 0; i < this.paints.length; i++) {
                //get each paint's categories
                let pc: PaintCategory[] = this.paints[i].paintCategories;
                //check if the selected categories are found 
                for (var j = 0; j < pc.length; j++) {
                    if (filteredCategoryIds.includes(pc[j].paintCategoryId)) {
                        this.paintsFilteredByCategory.push(this.paints[i]);
                    }
                }
            }

            this.refreshPaints();
        })

        return await filterPaintsByCategoriesModal.present();
    }
}
