import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private sessionService : SessionService
    ) { }

  ngOnInit() {
  }


}
