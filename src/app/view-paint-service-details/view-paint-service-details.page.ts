import { Component, OnInit } from '@angular/core';
import { PaintService } from '../paint-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PaintServiceService } from '../paint-service.service';

@Component({
  selector: 'app-view-paint-service-details',
  templateUrl: './view-paint-service-details.page.html',
  styleUrls: ['./view-paint-service-details.page.scss'],
})
export class ViewPaintServiceDetailsPage implements OnInit {

  paintServiceId : number;
  paintServiceToView : PaintService;
  retrievePaintServiceError : boolean;
  

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private location : Location,
    private paintServiceService : PaintServiceService)
  {
    this.retrievePaintServiceError = false;
  }

  ngOnInit() 
  {
    this.paintServiceId = parseInt(this.activatedRoute.snapshot.paramMap.get('paintServiceId'));
    
  }

  ionViewWillEnter() 
  {
    this.refreshPaintService();
  }


  refreshPaintService()
  {
    this.paintServiceService.getPaintServiceById(this.paintServiceId).subscribe
    (
      response => {
        this.paintServiceToView = response.paintService;
        this.paintServiceToView.paintServiceStartTime = new Date(this.paintServiceToView.paintServiceStartTime.toString().substring(0, this.paintServiceToView.paintServiceStartTime.toString().length - 5));
      },
      error => {
        this.retrievePaintServiceError = true;
      }
    )
  }

  updatePaintService()
  {
    this.router.navigate(["/updatePaintService/" + this.paintServiceId]);
  }

  back()
	{
		this.location.back();
	}

}
