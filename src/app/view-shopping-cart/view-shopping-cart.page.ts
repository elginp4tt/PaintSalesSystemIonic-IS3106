import { Component, OnInit } from '@angular/core';
import { TransactionLineItem } from '../transaction-line-item';
import { CartService } from '../cart.service';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
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
  totalPrice : number;
  endReached = false;
  isMember : boolean;
  loyaltyPoint : number;
  enteredLoyaltyPoint : number;
  discount : number;

  constructor(private cartService : CartService,
    private actionSheetController : ActionSheetController,
    private activatedRoute: ActivatedRoute,
    private alertController : AlertController,
    private sessionService : SessionService,
    private router : Router) 
  {
    this.totalItems = 0;
    this.subTotal = 0;
    this.totalPrice = 0;
    this.discount = 0;
    this.isMember = this.cartService.getIsMember();
    this.loyaltyPoint = 0;
    this.enteredLoyaltyPoint = 0;
  }

  ngOnInit() 
  {
    this.cart = this.cartService.getCart();
  }

  ionViewWillEnter()
  {
    this.cart = this.cartService.getCart();
    this.countNumItem();
    this.calculateTotal();
    this.totalPrice = this.subTotal;
    this.isMember = this.cartService.getIsMember();
    if(this.cartService.getIsMember() === true)
    {
      this.calculateDiscount();
    }
  }


  countNumItem()
  {
    for(var i=0;i<this.cart.length;i++)
    {
      this.totalItems = +this.totalItems + +this.cart[i].quantity;
    }
  }

  calculateTotal()
  {
    this.subTotal = this.cart.reduce((a,b)=>a + b.price * 1,0);
  }

  calculateTotalPrice()
  {
    this.totalPrice = this.subTotal;
  }

  test()
  {
    let customer : Customer = this.sessionService.getCurrentCustomer();
    if(customer.loyaltyPoints != null)
    {
      this.cartService.setIsMember(true);
      this.loyaltyPoint = customer.loyaltyPoints;
      this.router.navigate(['/viewLoyaltyPoints/' + this.loyaltyPoint]);
    }
    else
    {
      this.showAlertMessage();
    }
  }


  async showAlertMessage() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Sorry, you are not a member.',
      buttons: ['Ok']
    });

    await alert.present();
  }

  calculateDiscount()
  {
    this.enteredLoyaltyPoint = this.loyaltyPoint - this.cartService.getLoyaltyPoint();
    this.discount = this.enteredLoyaltyPoint * 0.1;
    this.totalPrice = +this.subTotal - +this.discount;
  }

  checkout()
  {
    console.log("******proceed to checkout");
    if (this.cartService.getCart().length === 0) {
      console.log("nothing to checkout");
      this.router.navigate(['/viewCart']);
    }
    else{
      this.cartService.setDiscount(this.discount);
      this.cartService.setTotalPrice(this.totalPrice);
      this.router.navigate(['/payment']);
    }
  }

    removeItem(i){
      this.cartService.removeItem(i);
      console.log(i);
      this.cart = this.cartService.getCart();
      this.countNumItem();
      this.calculateTotal();
      this.calculateTotalPrice();
    }
  
    isCartEmpty(){
      return this.cart.length == 0;
    }
  
    continueShopping (){
      this.router.navigate(['/viewAllPaints']);
    }
  
    clearCart(){
      this.cartService.clearCart();
      this.cart = this.cartService.getCart();
    }
  
    // checkout(){
    //   this.cartService.checkout();
    // }
    
  loadData(event) {
    setTimeout(() => {
        console.log('Done');
        this.endReached = true;
        event.target.complete();
    }, 500);
}

}


