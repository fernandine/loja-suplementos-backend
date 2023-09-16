import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/Category';
import { Flavors } from 'src/app/common/enums/flavors.enum';
import { PriceRange } from 'src/app/common/price-range';
import { Product } from 'src/app/common/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent {
  products: Product[] = [];
  flavors: { key: string; value: string; selected: boolean }[] = [];
  showAllFlavors = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.flavors = Object.keys(Flavors).map((value) => ({
      key: value,
      value,
      selected: false,
    }));

    this.route.queryParams.subscribe((params) => {
      const flavorFilter = params['flavor'] || [];
      this.filterProducts(flavorFilter);
    });
  }

  toggleShowAllFlavors() {
    this.showAllFlavors = !this.showAllFlavors;
  }

  filterProducts(flavorFilter: string[]): void {
    this.productService
      .getProductsByFlavors(flavorFilter)
      .subscribe((products) => {
        this.products = products;
      });
  }

  applyFilters(): void {
    const flavorFilter: string[] = this.flavors
      .filter((flavor) => flavor.selected)
      .map((flavor) => flavor.value);
    const filtersSelected = flavorFilter.length > 0;

    this.filterProducts(flavorFilter);
    if (!filtersSelected) {
      // Nenhum filtro selecionado, redirecionar para a URL atual
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentUrl]);
      });
    }
  }
}
