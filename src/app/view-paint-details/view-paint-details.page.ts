import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PaintService} from '../paint.service';
import { Paint } from '../paint';

@Component({
  selector: 'app-view-paint-details',
  templateUrl: './view-paint-details.page.html',
  styleUrls: ['./view-paint-details.page.scss'],
})
export class ViewPaintDetailsPage implements OnInit {

    paintId: number;
    paintToView: Paint;
    retrievePaintError: boolean;
    error: boolean;
    errorMessage: string;
    resultSuccess: boolean;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private paintService: PaintService) 
    {
        this.retrievePaintError = false;
        this.error = false;
        this.resultSuccess = false;
    }

    ngOnInit() {
        this.paintId = parseInt(this.activatedRoute.snapshot.paramMap.get('paintId'));

        this.refreshPaint();
    }

    ionViewWillEnter() {
        this.refreshPaint();
    }

    refreshPaint() {
        this.paintService.getPaintByPaintId(this.paintId).subscribe(
            response => {
                this.paintToView = response.paint;
            },
            error => {
                this.retrievePaintError = true;
                console.log('********** ViewPaintDetailsPage.ts ' + error);
            }
        )
    }

    back() {
        this.router.navigate(['/viewAllPaints']);
    }

}
