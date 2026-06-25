import { Service, signal } from '@angular/core';
import { Product } from '../products/product';

@Service()
export class CartService {
  private readonly cartItems = signal<Product[]>([]);

  addToCart(product: Product) {
    console.log('Product added to cart:', product.name);
    this.cartItems.update((items) => [...items, product]);
  }
}
