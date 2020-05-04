import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { LoginPage } from '../login/login.page';
import { LoginPageModule } from '../login/login.module';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private sessionService : SessionService,
    private appComponent : AppComponent,
    private router : Router
    ) { }

  ngOnInit() {
  }

  customerLogout (){
    this.sessionService.setIsLogin(false);
		this.sessionService.setCurrentCustomer(null);		
		this.appComponent.updateMainMenu();
  }

  customerProfile(){
    console.log("customer profile");
    console.log(this.sessionService.getCurrentCustomer().firstName);
    console.log(this.sessionService.getCurrentCustomer().lastName);
    console.log(this.sessionService.getCurrentCustomer().homeAddress);
    this.router.navigate(['/customerProfile']);
  }

}
