import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { EditService } from 'src/app/Service/edit/edit.service';
import { ProductService } from 'src/app/Service/product/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public Edit: [] = [];
  productFormEdit: FormGroup;
  private id : string;
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    ) { 

    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.productFormEdit = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      image: new FormControl(),
      describe: new FormControl(),
   });

    this.productService.getProduct(this.id).subscribe( 
      next => this.product = next,
      () => null,
      () => this.fillForm()
    );
  }

  fillForm(): void {
    this.productFormEdit = this.fb.group({
      name: [this.product.name],
      price: [this.product.price],
      image: [this.product.image],
      describe: [this.product.describe],
    });
  }
 
  onUpdate(){
    let editedProd = this.productFormEdit.value
    this.product.name = editedProd.name;
    this.product.image = editedProd.image;
    this.product.price = editedProd.price;
    this.product.describe = editedProd.describe;
    
    this.productService.update(this.product).subscribe(
      (data) => this.product = data,
      () => {},
      () => console.log("edit successfull")
    );
  }
}