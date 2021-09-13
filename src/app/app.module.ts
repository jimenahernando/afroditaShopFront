import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { DetailproductComponent } from './components/detailproduct/detailproduct.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductlistComponent } from './components/productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    DetailproductComponent,
    LoginComponent,
    RegisterComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
