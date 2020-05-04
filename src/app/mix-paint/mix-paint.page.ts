import { Component, OnInit } from '@angular/core';
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

    percentageHundred: boolean;
    paints: Paint[];
    paintIds: number[] = [];
    percentages: number[] = [];
    selectedPaints: Paint[];
    paint1: Paint;
    paint2: Paint;
    percentage1: number;
    percentage2: number;

    errorMessage: string;


    constructor(private paintService: PaintService,
        private cartService: CartService,
        private router: Router) {
    }

    checkValid() {
        console.log("Paint 1 :" + this.paint1 + " - " + " " + this.percentage1 + "%");
        console.log("Paint 2 :" + this.paint2 + " - " + " " + this.percentage2 + "%");
        console.log(this.paint1);
        console.log(this.paint2);
        if (this.paint1 == null || this.paint2 == null) {
            this.noPaintToast();
        } else if (this.paint1 == this.paint2) {
            this.samePaintToast();
        } else {
            if (this.percentage1 + this.percentage2 == 100) {
                this.submit();
            } else {
                this.percentageWrongToast();
            }
        }
        console.log('total % : ' + this.percentage1 + this.percentage2);
    }

    async samePaintToast() {
        const toast = document.createElement('ion-toast');
        toast.message = "Please choose different paints!";
        toast.position = "top";
        toast.duration = 2000;
        toast.style.textAlign = "center";

        document.body.appendChild(toast);
        return toast.present();
    }

    async noPaintToast() {
        const toast = document.createElement('ion-toast');
        toast.message = "Please select your 2 paints!";
        toast.position = "top";
        toast.duration = 2000;
        toast.style.textAlign = "center";

        document.body.appendChild(toast);
        return toast.present();
    }

    async percentageWrongToast() {
        const toast = document.createElement('ion-toast');
        toast.message = "Please make sure % is total 100%!";
        toast.position = "top";
        toast.duration = 2000;
        toast.style.textAlign = "center";

        document.body.appendChild(toast);
        return toast.present();
    }

    async submittedToast() {
        const toast = document.createElement('ion-toast');
        toast.message = "Paint Created!";
        toast.position = "top";
        toast.duration = 2000;
        toast.style.textAlign = "center";

        document.body.appendChild(toast);
        return toast.present();
    }

    submit() {
        let mixedPaintTransaction = new MixedPaintTransaction();
        mixedPaintTransaction.quantity = 1;
        mixedPaintTransaction.price = 12;
        mixedPaintTransaction.volume = 1;
        mixedPaintTransaction.itemName = 'Mixed Paint';
        this.paintIds.push(this.paint1.paintId);
        this.paintIds.push(this.paint2.paintId);
        this.percentages.push(this.percentage1);
        this.percentages.push(this.percentage2);
        mixedPaintTransaction.paintIds = this.paintIds;
        mixedPaintTransaction.paintValues = this.percentages;
        console.log("Paint 1 :" + this.paint1.name + " - " + this.paint1.paintId + " - " + " " + this.percentage1 + "%");
        console.log("Paint 2 :" + this.paint2.name + " - " + this.paint2.paintId + " - " +" " + this.percentage2 + "%");
        this.cartService.addItem(mixedPaintTransaction);
        this.submittedToast();
    }


    ngOnInit() {
        this.percentageHundred = false;
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
        console.log("ionViewWillEnter");
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

    selectPaints() {
        console.log(this.selectedPaints);
    }

}
