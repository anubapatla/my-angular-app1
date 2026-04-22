import { Component } from '@angular/core';
import { ProductService } from '../dependencies/product.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  names:string[];
  constructor( private productService:ProductService){
    this.names=this.productService.getName();
  }

}
