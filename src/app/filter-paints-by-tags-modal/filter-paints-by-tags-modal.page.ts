import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular'
import { PaintTag } from "../paint-tag"
import { TagService } from "../tag.service";

@Component({
  selector: 'app-filter-paints-by-tags-modal',
  templateUrl: './filter-paints-by-tags-modal.page.html',
  styleUrls: ['./filter-paints-by-tags-modal.page.scss'],
})
export class FilterPaintsByTagsModalPage implements OnInit {

    paintTags: PaintTag[];
    errorMessage: string;
    filteredTagIds: number[] = [];

    constructor(private modalController : ModalController,
                private tagService : TagService) 
    {
    }

    ngOnInit() {
        this.tagService.getPaintTags().subscribe(
            response => {
                this.paintTags = response.tags
            },
            error => {
                this.errorMessage = error
            }
        );
        console.log(this.paintTags);
    }


    addToFilteredTagsList($event, paintTag) {
        if(this.filteredTagIds.includes(paintTag.tagId)) {
            var tagToRemove = this.filteredTagIds.indexOf(paintTag.tagId);
            this.filteredTagIds.splice(tagToRemove, 1);
        } else {
            this.filteredTagIds.push(paintTag.tagId);
        }
    }

    public closeModal() {
        this.modalController.dismiss({
            'filteredTagIds': this.filteredTagIds
        })
    }

}
