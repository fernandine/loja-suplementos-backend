import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/Category';
import { User } from 'src/app/common/user';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  categories: Category[] = [];
  isLoggedIn!: boolean;
  user: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listCategories();
    })

    this.isLoggedIn = this.authService.isAuthenticated();
    const storedUser = localStorage.getItem('user');
    this.user = storedUser ? JSON.parse(storedUser) : null;
    console.log('user = ' + this.user)
    }

  listCategories() {
    this.categoryService.getCategory().subscribe(
      data => {
        this.categories = data;
      }
    );
  }

  handleCategoryClick(category: Category) {
    this.categoryService.setSelectedCategory(category);
    const categoryName = category.name;
    this.router.navigateByUrl(`products/categories/${categoryName}`);
  }

  logout(): void {
    this.authService.logout();
    location.reload();
    this.router.navigate(['/home']);
  }
}
