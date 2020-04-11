import { Component, OnInit } from '@angular/core';

import { PaintService } from '../paint.service';
import { Paint } from '../paint';


@Component({
  selector: 'app-view-all-paints',
  templateUrl: './view-all-paints.page.html',
  styleUrls: ['./view-all-paints.page.scss'],
})
export class ViewAllPaintsPage implements OnInit {
	
	paints: Paint[];
	errorMessage: string;

	constructor(private paintService: PaintService) {		
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


}
