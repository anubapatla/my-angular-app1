import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getName():string[]{
    return ['Angular','React','Vue'];
  }

  constructor() { }
}
