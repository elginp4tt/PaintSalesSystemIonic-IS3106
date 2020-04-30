import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PaintService } from '../paint.service';
import { CartService } from '../cart.service';
import { Paint } from '../paint';
import { MixedPaintTransaction } from '../mixed-paint-transaction';

@Component({
  selector: 'app-mix-paint',
  templateUrl: './mix-paint.page.html',
  styleUrls: ['./mix-paint.page.scss'],
})
export class MixPaintPage implements OnInit {
	
	paints: Paint[];
	paintIds: number[];
	percentages: number[];
	
	errorMessage: string;
	
	get percentage() {
		return this.mixPaintForm.get('percentage');
	}
	
	public errorMessages = {
		percentage: [
			{type:  'max', message: 'Please ensure percentage is below 100'}
		]
	};
	
	mixPaintForm = this.formBuilder.group({
		percentage: ['', [Validators.max(100)]],
	});

    constructor(private paintService: PaintService,
				private cartService: CartService,
                private router: Router,
				private formBuilder: FormBuilder) {
	}
	
	submit(mixPaintForm: NgForm) {
		
	if (mixPaintForm.valid) 
		{		
			let mixedPaintTransaction = new MixedPaintTransaction();
			mixedPaintTransaction.quantity = 1;
			mixedPaintTransaction.price = 12;
			mixedPaintTransaction.volume = 1;
			mixedPaintTransaction.itemName = 'Mixed Paint';
			mixedPaintTransaction.paintIds = this.paintIds;
			mixedPaintTransaction.paintValues = this.percentages;
			
			this.cartService.addItem(mixedPaintTransaction);
		}
	}


	ngOnInit() {
		this.paintService.getPaints().subscribe(
			response => {
				this.paints = response.paints
			},
			error => {
				this.errorMessage = error
			}
		);
    }
    
    ionViewWillEnter() {
        this.refreshPaints();
    }

    viewPaintDetails(event, paint) {
        this.router.navigate(['/viewPaintDetails' + paint.paintId]);
    }

    refreshPaints() {
        this.paintService.getPaints().subscribe(
			response => {
				this.paints = response.paints
			},
			error => {
				this.errorMessage = error
			}
		);
    }

}
