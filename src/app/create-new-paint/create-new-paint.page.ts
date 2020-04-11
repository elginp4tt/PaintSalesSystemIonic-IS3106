import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { TagService } from '../tag.service';
import { PaintCategoryService } from '../paint-category.service';
import { PaintService } from '../paint.service';
import { PaintTag } from '../paint-tag';
import { PaintCategory } from '../paint-category';
import { Paint } from '../paint';

@Component({
  selector: 'app-create-new-paint',
  templateUrl: './create-new-paint.page.html',
  styleUrls: ['./create-new-paint.page.scss'],
})
export class CreateNewPaintPage implements OnInit {

	submitted: boolean;
	newPaint: Paint;
	infoMessage: string;
	errorMessage: string;
	
	paintCategories: PaintCategory[];
	tags: Tag[];


	constructor(private paintService: PaintService,
				private paintCategoryService: PaintCategoryService,
				private tagService: TagService)
	{
		this.submitted = false;
		this.newPaint = new Paint();
	}



	ngOnInit()
	{
		this.paintCategoryService.getPaintCategories().subscribe(
			response => {
				this.paintCategories = response.paintCategories;
			},
			error => {
				console.log('********** CreateNewProductComponent.ts: ' + error);
			}
		);
		
		this.tagService.getPaintTags().subscribe(
			response => {
				this.tags = response.tags;
			},
			error => {
				console.log('********** CreateNewProductComponent.ts: ' + error);
			}
		);
	}



	clear()
	{
		this.submitted = false;
		this.newPaint = new Paint();
	}



	create(createPaintForm: NgForm)
	{
		this.submitted = true;
		
		if(createPaintForm.valid)
		{
			this.paintService.createNewPaint(this.newPaint).subscribe(
				response => {
					this.infoMessage = 'New paint created ' + response.newPaintId;
					this.errorMessage = null;
				},
				error => {
					this.infoMessage = null;
					this.errorMessage = error;
				}
			);			
		}
	}
}
