import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-right-error',
  templateUrl: './access-right-error.page.html',
  styleUrls: ['./access-right-error.page.scss'],
})
export class AccessRightErrorPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  redirectToLogin(){
    this.router.navigate(['login']);
  }

}
