import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/Category';
import { Flavors } from 'src/app/common/enums/flavors.enum';
import { PriceRange } from 'src/app/common/price-range';
import { Product } from 'src/app/common/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetails } from '../../common/product-details';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent {

  products: Product[] = [];
  selectedFlavor: string = '';
  flavors: { key: string, value: string, selected: boolean }[] = [];
  selectedCategory!: Category;

  showAllFlavors = false;
 minPrice: number = 10;
  maxPrice: number = 10000;
  rangeValues: PriceRange = { minPrice: this.minPrice, maxPrice: this.maxPrice };
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.categoryService.getSelectedCategory().subscribe((category: Category | null) => {
      if (category) {
        this.selectedCategory = category;
        const categoryId = category.id;
        // Chame a função de filtro de produtos com a categoria selecionada
        this.filterProducts([], categoryId);
      }
    });

    this.flavors = Object.keys(Flavors).map(value => ({ key: value, value, selected: false }));

    this.route.queryParams.subscribe(params => {
      const flavorFilter = params['flavor'] || [];
      this.filterProducts(flavorFilter,  this.selectedCategory?.id);
    });
  }

  searchByPriceRange() {
    // Atualize o rangeValues antes de chamar o serviço
    this.rangeValues = { minPrice: this.minPrice, maxPrice: this.maxPrice };

    // Chame o serviço para buscar os produtos de acordo com o intervalo de preço selecionado
    this.productService.getProductsByPriceRange(this.rangeValues).subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        console.log(error);
      }
    );
  }



  toggleShowAllFlavors() {
    this.showAllFlavors = !this.showAllFlavors;
  }

  filterProducts(flavorFilter: string[], categoryId: number): void {
    this.productService.getProductsByFilters(flavorFilter, [{id: categoryId}] as Category[])
      .subscribe(products => {
        this.products = products;
      });
  }

  applyFilters(): void {
    const flavorFilter: string[] = this.flavors.filter(flavor => flavor.selected).map(flavor => flavor.value);
    const filtersSelected = flavorFilter.length > 0;

    this.filterProducts(flavorFilter, this.selectedCategory.id);
    if (!filtersSelected) {
      // Nenhum filtro selecionado, redirecionar para a URL atual
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      });
  }
 }
}

