import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'product-list', component: ProductListComponent},
  { path: 'product-edit', component: ProductEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
export class AppRoutingModule { }
