import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/common/Category';
import { Product } from 'src/app/common/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() products: Product[] = [];
  categories!: Category[];
  currentCategoryName: string = '';

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
    ) { }


  ngOnInit(): void {
    this.listProducts();
    this.listCategories();
  }

  listCategories() {
    this.categoryService.getCategory().subscribe(
      data => {
        this.categories = data;
      }
    );
  }

  listProducts() {
    this.route.paramMap.subscribe(params => {
      const categoryName = params.get('name') || 'default';
      this.currentCategoryName = categoryName;
      this.productService.getProductByCategoryName(categoryName).subscribe(
        data => {
          this.products = data; // Atribua os produtos diretamente
        }
      );
    });
  }
}
