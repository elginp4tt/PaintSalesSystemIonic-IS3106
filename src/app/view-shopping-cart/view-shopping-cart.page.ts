import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { TransactionLineItem } from '../transaction-line-item';

@Component({
  selector: 'app-view-shopping-cart',
  templateUrl: './view-shopping-cart.page.html',
  styleUrls: ['./view-shopping-cart.page.scss'],
})
export class ViewShoppingCartPage implements OnInit {

  private cart: TransactionLineItem[];

  constructor(private cartService : CartService,
    private router : Router,
    private sessionService : SessionService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
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

  checkout(){
    this.cartService.checkout();
  }

}
