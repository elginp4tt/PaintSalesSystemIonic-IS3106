import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

import { PaintService } from '../paint.service';
import { Paint } from '../paint';
import { FilterPaintsByCategoriesModalPage } from '../filter-paints-by-categories-modal/filter-paints-by-categories-modal.page';
import { isRegExp } from 'util';
import { PaintCategory } from '../paint-category';
import { FilterPaintsByTagsModalPage } from '../filter-paints-by-tags-modal/filter-paints-by-tags-modal.page';
import { PaintTag } from '../paint-tag';
import { CartService } from '../cart.service';
import { TransactionLineItem } from '../transaction-line-item';
import { PaintTransaction } from '../paint-transaction';
import { SessionService } from '../session.service';
import { createAttribute } from '@angular/compiler/src/core';


@Component({
    selector: 'app-view-all-paints',
    templateUrl: './view-all-paints.page.html',
    styleUrls: ['./view-all-paints.page.scss'],
})
export class ViewAllPaintsPage implements OnInit {

    paints: Paint[];
    errorMessage: string;
    paintsFilteredByCategory: Paint[] = [];
    paintsFilteredByTags: Paint[] = [];
    paintQty: number;
    transactionLineItem: TransactionLineItem;
    endReached = false;
    cart: TransactionLineItem[];

    constructor(private paintService: PaintService,
        private router: Router,
        private modalController: ModalController,
        private cartService: CartService,
        private alertController: AlertController,
        private sessionService: SessionService
    ) {
    }


    ngOnInit() {
        this.paintQty = 0;
        this.refreshPaints();
        this.presentAlert();
    }

    ionViewWillEnter() {
        console.log("ionViewWillEnter");

        this.refreshPaints();
    }

    viewPaintDetails(event, paint) {
        this.router.navigate(["/viewPaintDetails/" + paint.paintId]);
    }

    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            this.endReached = true;
            event.target.complete();
        }, 500);
    }

    async presentAlert() {
        let infoAlert = await this.alertController.create({
            header: 'Info',
            subHeader: 'Filtering options available by Categories and Tags. Use Reset button to reset the paints filtered.',
            buttons: ['Dismiss']

        });

        await infoAlert.present();
    }

    refreshPaints() {
        if (this.paintsFilteredByCategory.length == 0 && this.paintsFilteredByTags.length == 0) {
            this.paintService.getPaints().subscribe(
                response => {
                    this.paints = response.paints
                },
                error => {
                    this.errorMessage = error
                }
            );
        } else {
            if (this.paintsFilteredByCategory.length != 0) {
                this.paints = this.paintsFilteredByCategory;
            }
            else if (this.paintsFilteredByTags.length != 0) {
                this.paints = this.paintsFilteredByTags;
            }
        }
        console.log("Paints filtered by category");
        console.log(this.paintsFilteredByCategory);


    }

    async presentFilterPaintsByCategoriesModal() {
        const filterPaintsByCategoriesModal = await this.modalController.create({
            component: FilterPaintsByCategoriesModalPage,
        });

        filterPaintsByCategoriesModal.onDidDismiss().then((event) => {
            let filteredCategoryIds: number[] = event.data.filteredCategoryIds;

            //iterate over all paints
            for (var i = 0; i < this.paints.length; i++) {
                //get each paint's categories
                let pc: PaintCategory[] = this.paints[i].paintCategories;
                //check if the selected categories are found 
                for (var j = 0; j < pc.length; j++) {
                    var selectedId = pc[j].paintCategoryId;
                    if (filteredCategoryIds.includes(selectedId)) {
                        var selectedPaint = this.paints[i];
                        // check if paint is already in the selected array
                        if (!this.paintsFilteredByCategory.includes(selectedPaint)) {
                            this.paintsFilteredByCategory.push(this.paints[i]);
                        }
                    }
                }
            }

            this.refreshPaints();
        })

        return await filterPaintsByCategoriesModal.present();
    }

    async presentFilterPaintsByTagsModal() {
        const filterPaintsByTagsModal = await this.modalController.create({
            component: FilterPaintsByTagsModalPage,
        });

        filterPaintsByTagsModal.onDidDismiss().then((event) => {
            let filteredTagIds: number[] = event.data.filteredTagIds;

            //iterate over all paints
            for (var i = 0; i < this.paints.length; i++) {
                //get each paint's tags
                let pt: PaintTag[] = this.paints[i].tags;
                //check if the selected categories are found 
                for (var j = 0; j < pt.length; j++) {
                    var selectedId = pt[j].tagId;
                    if (filteredTagIds.includes(selectedId)) {
                        var selectedPaint = this.paints[i];
                        // check if paint is already in the selected array
                        if (!this.paintsFilteredByTags.includes(selectedPaint)) {
                            this.paintsFilteredByTags.push(this.paints[i]);
                        }
                    }
                }
            }

            this.refreshPaints();
        })

        return await filterPaintsByTagsModal.present();
    }

    addToCart(paint) {
        this.transactionLineItem = new TransactionLineItem();
        let totalPrice: number = this.paintQty * paint.price;

        this.transactionLineItem = new PaintTransaction(null, paint.name, this.paintQty, totalPrice, this.paintQty, paint);
        this.cartService.addItem(this.transactionLineItem);
    }

    presentEnterQty(paint) {
        this.paintQty = 0;
        if (this.sessionService.getIsLogin() == false) {
            this.loginToast();
            return false;
        }
        const alert = document.createElement('ion-alert');
        alert.header = "May I Know How Much You need?";
        alert.subHeader = "Stocks left: " + paint.quantityOnHand;
        alert.inputs = [
            {
                name: 'quantity',
                id: 'quantity',
                type: 'number',
                placeholder: '1 - 100 (1 = 1\u2113 = 1 tin)',
                min: 1,
                max: 100
            }
        ];
        alert.buttons = [
            {
                text: 'Close',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    console.log('Confirm Cancel')
                }
            }, {
                text: 'Ok',
                handler: (data) => {
                    if (data.quantity >= 1 && data.quantity <= paint.quantityOnHand) {
                        this.cart = this.cartService.getCart();
                        for (let i of this.cart) {
                            if (i instanceof PaintTransaction && i.paint.name === paint.name) {
                                this.failureToAddToast();
                                return false;
                            }
                        }
                        this.paintQty = data.quantity;
                        this.addToCart(paint);
                        this.successPaintLitreToast();
                    } else {
                        this.failurePaintLitreToast();
                    }
                    console.log('Confirm ok')
                }
            }
        ];

        document.body.appendChild(alert);
        return alert.present();
    }

    async failurePaintLitreToast() {
        const toast = document.createElement('ion-toast');
        toast.message = "You have either ordered too less or more than our stocks!";
        toast.position = "top";
        toast.duration = 2000;
        toast.style.textAlign = "center";

        document.body.appendChild(toast);
        return toast.present();
    }

    async successPaintLitreToast() {
        const toast = document.createElement('ion-toast');
        toast.message = "Adding to The Cart!";
        toast.position = "top";
        toast.duration = 1000;
        toast.style.textAlign = "center";

        document.body.appendChild(toast);
        return toast.present();
    }

    async loginToast() {
        const toast = document.createElement('ion-toast');
        toast.message = "Please Login Before You Start To Add/View Items in Cart!";
        toast.position = "top";
        toast.duration = 2000;
        toast.style.textAlign = "center";

        document.body.appendChild(toast);
        return toast.present();
    }

    async failureToAddToast() {
        const toast = document.createElement('ion-toast');
        toast.message = "You currently have that item in the cart, remove it in the cart and re-add the item into the cart!";
        toast.position = "top";
        toast.duration = 3000;
        toast.style.textAlign = "center";

        document.body.appendChild(toast);
        return toast.present();
    }

    viewShoppingCart() {
        if (this.sessionService.getIsLogin() == false) {
            this.loginToast();
            return false;
        }
        this.router.navigate(['/viewCart']);
    }

    reset() {
        this.paintService.getPaints().subscribe(
            response => {
                this.paints = response.paints
            },
            error => {
                this.errorMessage = error
            }
        ); 
        this.paintsFilteredByCategory = [];
        this.paintsFilteredByTags = [];
    }
}
