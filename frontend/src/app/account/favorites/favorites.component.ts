import { Component } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

  likedProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.productService.findByFavorite(true).subscribe(
      likedProducts => this.likedProducts = likedProducts
    );
  }

  onFavoriteProductsChanged(product: Product): void {
    this.productService.toggleFavorite(product).subscribe(
      () => this.getProductList()
    );
  }
}
