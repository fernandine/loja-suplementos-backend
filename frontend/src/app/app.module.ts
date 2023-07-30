import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountComponent } from './account/account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { CartDetailComponent } from './checkout/cart-detail/cart-detail.component';
import { CartStatusComponent } from './checkout/cart-status/cart-status.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PathRoutingModule } from './components/path-routing.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PrimengModule } from './primeng.module';
import { BooleanPipe } from './shared/pipe/boolean.pipe';
import { CurrencyFormatPipe } from './shared/pipe/currency-format.pipe';
import { AboutComponent } from './single/about/about.component';
import { NotificationService } from './services/notification.service';
import { MessageService } from 'primeng/api';
import { ContactComponent } from './single/contact/contact.component';
import { DashboardComponent } from './administrator/dashboard/dashboard.component';
import { AddressFormComponent } from './account/address-form/address-form.component';
import { AddressListComponent } from './account/address-list/address-list.component';
import { FavoritesComponent } from './account/favorites/favorites.component';
import { OrderHistoryComponent } from './account/order-history/order-history.component';
import { ProfilesComponent } from './account/profiles/profiles.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CurrencyFormatPipe,
    BreadcrumbComponent,
    BooleanPipe,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoryFilterComponent,
    CartDetailComponent,
    CartStatusComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    ContactComponent,
    DashboardComponent,
    AccountComponent,
    AddressFormComponent,
    AddressListComponent,
    FavoritesComponent,
    OrderHistoryComponent,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PathRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,

  ],
  providers: [
    NotificationService,
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
