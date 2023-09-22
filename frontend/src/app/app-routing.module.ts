import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account/account.component';
import { AddressListComponent } from './account/address-list/address-list.component';
import { FavoritesComponent } from './account/favorites/favorites.component';
import { OrderHistoryComponent } from './account/order-history/order-history.component';
import { ProfilesComponent } from './account/profiles/profiles.component';
import { LoginComponent } from './authentication/login/login.component';
import { NewPasswordComponent } from './authentication/new-password/new-password.component';
import { RecoverPasswordComponent } from './authentication/recover-password/recover-password.component';
import { RecoverSuccessComponent } from './authentication/recover-success/recover-success.component';
import { RegisterComponent } from './authentication/register/register.component';
import { CartDetailComponent } from './checkout/cart-detail/cart-detail.component';
import { OrderFormComponent } from './checkout/order-form/order-form.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AboutComponent } from './single/about/about.component';
import { ContactComponent } from './single/contact/contact.component';
import { OrderSummaryComponent } from './checkout/order-summary/order-summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth-login', component: LoginComponent },

  { path: 'account', component: AccountComponent, children: [
    { path: 'profile', component: ProfilesComponent },
    { path: 'address', component: AddressListComponent },
    { path: 'order-history', component: OrderHistoryComponent },
    { path: 'favorites', component: FavoritesComponent },
  ]},

{ path: 'products/categories/:name', component: CategoryFilterComponent },
{ path: 'filter', component: CategoryFilterComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'recover-password', component: RecoverPasswordComponent },
{ path: 'recover-password/:token', component: NewPasswordComponent },
{ path: 'recover-success', component: RecoverSuccessComponent },
{ path: 'products/:id', component: ProductDetailComponent },
{ path: 'cart-details', component: CartDetailComponent },
{ path: 'search/:keyword',component: ProductListComponent},
{ path: 'categories', component: ProductListComponent},
{ path: 'order', component: OrderFormComponent },
{ path: 'order/:id', component: OrderSummaryComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
