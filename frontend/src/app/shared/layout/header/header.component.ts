import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Category } from 'src/app/common/Category';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { User } from '../../../common/user';
import { UserService } from '../../../services/user.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  categories: Category[] = [];
  isLoggedIn!: boolean;
  firstname: string = '';
  isMobile!: boolean;
  isDesktop: boolean = !this.isMobile;

  cartItems: CartItem[] = [];
  totalQuantity: number = 0;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private loginService: LoginService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listCategories();
    });

    this.isLoggedIn = this.authService.isAuthenticated();
    this.loadUserData();
    this.loginService.getLoginObservable().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
      if (loggedIn) {
        this.loadUserData();
      } else {
        this.firstname = '';
      }
    });
    this.updateCartStatus();
this.onResize(event);
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isDesktop = window.innerWidth >= 1024;
  }

  goCheckoutCart() {
    this.router.navigate(["/cart-details"])
  }

  updateCartStatus() {
    this.cartService.totalQuantity.subscribe(
      (data: number) => this.totalQuantity = data
    )
  }

  logoUrl() {
    this.router.navigate(["/home"]);
  }

  loadUserData() {
    this.userService.getAuthenticatedUser().subscribe(
      (user: User) => {
        this.firstname = user.firstname;
        this.isLoggedIn = true;
      },
      (error) => {
        console.log(error);
      }
    );
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

  logout(): void {
    this.authService.logout();
    location.reload();
    this.router.navigate(['/home']);
  }
}
