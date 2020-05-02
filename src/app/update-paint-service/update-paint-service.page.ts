import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PaintService } from '../paint-service';
import { PaintServiceService } from '../paint-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-paint-service',
  templateUrl: './update-paint-service.page.html',
  styleUrls: ['./update-paint-service.page.scss'],
})
export class UpdatePaintServicePage implements OnInit {

  paintServiceId : number;
  paintServiceToUpdate : PaintService;
  retrievePaintServiceError : boolean;

  convertedDate : Date;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  constructor(private router : Router,
    private location : Location,
    private activatedRoute : ActivatedRoute,
    private paintServiceService : PaintServiceService) 
  {
    this.retrievePaintServiceError = false;
    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() 
  {
    this.paintServiceId = parseInt(this.activatedRoute.snapshot.paramMap.get('paintServiceId'));

    this.paintServiceService.getPaintServiceById(this.paintServiceId).subscribe
    (
      response => {
        this.paintServiceToUpdate = response.paintService;
        this.convertedDate = new Date(this.paintServiceToUpdate.paintServiceStartTime.toString().substring(0,this.paintServiceToUpdate.paintServiceStartTime.toString().length - 5));
      },
      error => {
        this.retrievePaintServiceError = true;
      }
    )
  }

  update(updatePaintServiceForm : NgForm)
  {
    this.paintServiceToUpdate.paintServiceStartTime = this.convertedDate;

    if(updatePaintServiceForm.valid)
    {
      this.paintServiceService.updatePaintService(this.paintServiceToUpdate).subscribe
      (
        response => {
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Paint service updated successfully";
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while updating the paint service: " + error;
        }
      )
    }
  }

  get convert(): string {
    return this.convertedDate.toISOString();
  }

  set convert(value: string) {
    this.convertedDate = new Date(value);
  }

  back()
	{
		this.location.back();
	}

}
