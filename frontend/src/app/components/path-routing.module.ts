import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../authentication/login/login.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from '../single/about/about.component';
import { ContactComponent } from '../single/contact/contact.component';
import { DiscountComponent } from './discount/discount.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { CartDetailComponent } from '../checkout/cart-detail/cart-detail.component';
import { AccountComponent } from '../account/account/account.component';
import { ProfilesComponent } from '../account/profiles/profiles.component';
import { AddressListComponent } from '../account/address-list/address-list.component';
import { OrderHistoryComponent } from '../account/order-history/order-history.component';
import { FavoritesComponent } from '../account/favorites/favorites.component';
import { DashboardComponent } from '../administrator/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { title: 'Home' },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { title: 'About' },
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: { title: 'Contact' },
      },
      {
        path: 'discounts',
        component: DiscountComponent,
        data: { title: 'Discounts' },
      },
    ],
  },
  { path: 'products/categories/:name', component: CategoryFilterComponent },
  { path: 'filter', component: CategoryFilterComponent },
  {
    path: 'auth-login',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' },
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Detail' },
  },
  { path: 'cart-details', component: CartDetailComponent },

  {
    path: 'search/:keyword',
    component: ProductListComponent,
    data: { title: 'Search' },
  },
  {
    path: 'categories',
    component: ProductListComponent,
    data: { title: 'Categories' },
  },
  {
    path: 'products',
    component: ProductListComponent,
    data: { title: 'Products' },
    children: [
      { path: 'flavors/:flavors', component: ProductListComponent }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Categories' },
  },
  { path: 'account', component: AccountComponent, children: [
    { path: 'profile', component: ProfilesComponent },
    { path: 'address', component: AddressListComponent },
    { path: 'order-history', component: OrderHistoryComponent },
    { path: 'favorites', component: FavoritesComponent },
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PathRoutingModule { }
