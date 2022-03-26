import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ListProductComponent } from './Components/list-product/list-product.component';
import { DetailProductComponent } from './Components/detail-product/detail-product.component';
import { CartComponent } from './Components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { DeclaresComponent } from './Components/declares/declares.component';
import { EditComponent } from './components/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ListProductComponent,
    DetailProductComponent,
    CartComponent,
    DeclaresComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
