import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPaintsByCategoriesModalPageModule } from './filter-paints-by-categories-modal/filter-paints-by-categories-modal.module';
import { FilterPaintsByTagsModalPageModule } from './filter-paints-by-tags-modal/filter-paints-by-tags-modal.module';
import { CustomerProfileModalPageModule } from './customer-profile-modal/customer-profile-modal.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FilterPaintsByCategoriesModalPageModule,
    FilterPaintsByTagsModalPageModule,
    CustomerProfileModalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
