import { Component, OnInit } from '@angular/core';
import { PaintService } from '../paint-service';
import { Router } from '@angular/router';
import { PaintServiceService } from '../paint-service.service';

@Component({
  selector: 'app-view-all-paint-services',
  templateUrl: './view-all-paint-services.page.html',
  styleUrls: ['./view-all-paint-services.page.scss'],
})
export class ViewAllPaintServicesPage implements OnInit {

  paintServices : PaintService[];

  constructor(private router: Router,
    private paintServiceService : PaintServiceService) 
  {
  }

  ngOnInit() 
  {
    this.refreshPaintServices();
  }

  ionViewWillEnter()
  {
    this.refreshPaintServices();
  }


  viewPaintServiceDetails(event, paintService)
  {
    this.router.navigate(["/viewPaintServiceDetails/" + paintService.paintServiceId]);
  }

  refreshPaintServices()
  {
    this.paintServiceService.getAllPaintServices().subscribe(
      response => {
        this.paintServices = response.paintServices;

        if(this.paintServices != null)
        {
          for(var i = 0;i<this.paintServices.length;i++)
          {
            this.paintServices[i].paintServiceStartTime = new Date(this.paintServices[i].paintServiceStartTime.toString().substring(0, this.paintServices[i].paintServiceStartTime.toString().length - 5));
          }
          this.paintServices.sort((n1,n2) => n1.paintServiceId - n2.paintServiceId);
        }
      },
      error => {
        console.log('********** ViewAllPaintServicesPage.ts: ' + error);
      }
    )
  }

}
