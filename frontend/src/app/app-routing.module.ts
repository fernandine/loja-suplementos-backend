import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [

  //{ path: 'about', component: AboutComponent },
  //{ path: 'contact', component: ContactComponent },
  //{ path: 'discounts', component: DiscountComponent },
  { path: 'auth-login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Registro' } },
  { path: 'products/:id', component: ProductDetailComponent, data: { title: 'products' } },
  { path: 'search/:keyword', component: ProductListComponent },
  //{ path: 'products/categories/:name', component: CategoryFilterComponent },
  { path: 'categories', component: ProductListComponent, data: { title: 'Produtos' } },
  //{ path: 'filter', component: CategoryFilterComponent },
  { path: 'products', component: ProductListComponent, data: { title: 'Produto' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/products', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
