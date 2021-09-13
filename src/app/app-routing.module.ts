import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailproductComponent } from './components/detailproduct/detailproduct.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { ProductlistComponent } from './components/productlist/productlist.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "product-list", component: ProductlistComponent },
  { path: "product/:idProduct", component: DetailproductComponent },
  { path: "**", component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
