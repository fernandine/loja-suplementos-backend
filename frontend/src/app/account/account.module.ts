import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng.module';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './account/account.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { AddressListComponent } from './address-list/address-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccountComponent,
    AddressFormComponent,
    AddressListComponent,
    FavoritesComponent,
    ProfilesComponent,
    OrderHistoryComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, PrimengModule, SharedModule]

})
export class AccountModule {}
