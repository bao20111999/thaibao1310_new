import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { DeclaresComponent } from './Components/declares/declares.component';
import { DetailProductComponent } from './Components/detail-product/detail-product.component';
import { EditComponent } from './components/edit/edit.component';
 


import { ListProductComponent } from './Components/list-product/list-product.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
  },
  {
    path: 'detail/:id',
    component: DetailProductComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'Declares',
    component: DeclaresComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
