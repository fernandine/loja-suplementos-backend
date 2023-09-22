import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Decimal from 'decimal.js';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { Review } from 'src/app/common/review';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ReviewService } from 'src/app/services/review.service';
import { ProductDetails } from '../../common/product-details';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  @Input() product!: Product;
  @Input() productDetail!: ProductDetails;
  @Output() favoriteProductsChanged = new EventEmitter<Product>();

  cartItem!: CartItem
  reviews: Review[] = [];
  quantity = 1;
  rating!: number;

  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private reviewService: ReviewService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listReviews();

    this.activatedRoute.paramMap.subscribe(() => {
      this.handleProductDetails()
    })
  }

  handleProductDetails() {
    const theProductId: number = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.productService.getProductById(theProductId).subscribe(
      (data: any) => {
        this.product = {
          ...data,
          unitPrice: new Decimal(data.unitPrice)
        };
      });
  }

  addToCart() {
    this.cartItem = {
      id: this.product.id,
      name: this.product.name,
      imgUrl: this.product.image,
      price: this.product.unitPrice,
      quantity: 1,
    };
    this.cartService.addToCart(this.cartItem);
    this.quantity = 1;
    this.router.navigate(["/cart-details"])
  }

  toggleFavorite(): void {
    this.productService.toggleFavorite(this.product).subscribe(
      updatedProduct => this.favoriteProductsChanged.emit(updatedProduct)
    );
  }

  isFavorite(): boolean {
    return this.product.favorite;
  }

   listReviews() {
    this.reviewService.getReview().subscribe(
      data => {
        this.reviews = data;
      }
    );
   }

   getStars(rating: number): boolean[] {
    const stars = Array(5).fill(false);
    for (let i = 0; i < Math.round(rating); i++) {
      stars[i] = true;
    }
    return stars;
  }
}

