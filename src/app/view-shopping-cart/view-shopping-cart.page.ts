import { Component, OnInit } from '@angular/core';
import { TransactionLineItem } from '../transaction-line-item';
import { CartService } from '../cart.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-view-shopping-cart',
  templateUrl: './view-shopping-cart.page.html',
  styleUrls: ['./view-shopping-cart.page.scss'],
})
export class ViewShoppingCartPage implements OnInit {

  cart : TransactionLineItem[];
  totalItems : number;
  subTotal : number;

  constructor(private cartService : CartService,
    private actionSheetController : ActionSheetController,
    private router : Router) 
  {
    this.totalItems = 0;
    this.subTotal = 0;
  }

  ngOnInit() 
  {
  }

  ionViewWillEnter()
  {
    this.cart = this.cartService.getCart();
    this.countNumItem();
    this.calculateTotal();
  }


  countNumItem()
  {
    for(var i=0;i<this.cart.length;i++)
    {
      this.totalItems = this.totalItems + this.cart[i].quantity;
    }
  }

  calculateTotal()
  {
    this.subTotal = this.cart.reduce((a,b)=>a + b.price * b.quantity,0);
  }

  checkout()
  {
    console.log("******proceed to checkout");
    if (this.cartService.getCart().length === 0) {
      console.log("nothing to checkout");
      this.router.navigate(['/viewCart']);
    }
    else{
      this.router.navigate(["/payment"]);
    }
  }

    removeItem(transactionLineItem){
      this.cartService.removeItem(transactionLineItem);
    }
  
    isCartEmpty(){
      return this.cart.length == 0;
    }
  
    continueShopping (){
      this.router.navigate(['/viewAllPaints']);
    }
  
    clearCart(){
      this.cartService.clearCart();
    }
  
    // checkout(){
    //   this.cartService.checkout();
    // }
    
}


