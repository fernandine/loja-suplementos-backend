import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/Category';
import { User } from 'src/app/common/user';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  categories: Category[] = [];
  isLoggedIn!: boolean;
  username: string = '';

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listCategories();
    })

    this.isLoggedIn = this.authService.isAuthenticated();
    this.username = this.getUsername();
    this.loginService.getLoginObservable().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
      this.username = loggedIn ? this.getUsername() : '';
    });
    }

    getUsername(): string {
      const currentUser = this.authService.getCurrentUser();
      return currentUser ? currentUser.firstname : '';
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
