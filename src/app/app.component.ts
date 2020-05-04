import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;

  public appPages;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public sessionService: SessionService
  ) {
    this.initializeApp();

    this.updateMainMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    this.updateMainMenu();
  }

  onActivate(componentReference)
	{
		console.log('********** AppComponent.onActivate: ' + componentReference.componentType);
		this.updateMainMenu();
  }
  
  updateMainMenu() {
    if (this.sessionService.getIsLogin()) { //What you want the customer to see after logged in
      this.appPages = [
        {
          title: 'Home',
          url: '/home',
          icon: 'home'
        },
        {
          title: 'Customer Profile',
          url: '/customerProfile',
          icon: 'person'
        },
        {
          title: 'View All Paints',
          url: '/viewAllPaints',
          icon: 'color-fill'
        },
        {
            title: 'Mix Paints',
            url: '/mixPaint',
            icon: 'color-fill'
        },
        {
          title: 'View Shopping Cart',
          url: '/viewCart',
          icon: 'cart'
        },
        {
          title: 'View My Past Transactions',
          url: '/viewAllTransaction',
          icon: 'list'
        },
        {
          title: 'View My Deliveries',
          url: '/viewAllDeliveries',
          icon: 'list'
        },
        {
          title : 'Request Delivery',
          url : '/requestNewDelivery',
          icon: 'car-sport'
        },
        {
          title: 'View My Paint Services',
          url: '/viewAllPaintServices',
          icon: 'list',
        },
        {
          title : 'Request Paint Service',
          url : '/requestNewPaintService',
          icon: 'color-palette'
        },
        {
          title: 'Logout',
          url: '/login',
          icon: 'log-out'
        },
      ];
    } else { //What you want the customer to see before logged in
      this.appPages = [
        {
          title: 'Home',
          url: '/home',
          icon: 'home'
        },
        {
          title: 'View All Paints',
          url: '/viewAllPaints',
          icon: 'arrow-forward'
        },
        {
          title: 'Login/Register',
          url: '/login',
          icon: 'log-in'
        }
      ];
    }
  }
}
