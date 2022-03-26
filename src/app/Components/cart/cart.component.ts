import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/Service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productCart: Observable<Product[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.productCart = this.cartService.getListCart()
  }

  deleteCart(id: number) {

    var r = confirm("Delete product ?");
    if (r == true) {
      this.cartService.deleteProductCart(id).subscribe(data => {
        this.getAll();
      },
        (error) => console.log(error))
    }
  }
}
