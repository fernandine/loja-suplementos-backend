import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
  @Input() isMobile!: boolean;
  categories: Category[] = [];
  sidebarVisible = false;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listCategories();
    });
  }

  listCategories() {
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }

  handleCategoryClick(category: Category) {
    this.categoryService.setSelectedCategory(category);
    const categoryName = category.name;
    this.router.navigateByUrl(`products/categories/${categoryName}`);
  }

  onLogin(){
    this.router.navigate(["/auth-login"]);
  }

  onAccount(){
    this.router.navigate(["/account"]);
  }

  onRegister(){
    this.router.navigate(["/register"]);
  }

  onCart() {
    this.router.navigate(["/cart-details"])
  }

}
