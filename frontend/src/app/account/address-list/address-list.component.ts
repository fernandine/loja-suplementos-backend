import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/common/address';
import { AddressService } from 'src/app/services/address.service';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent {
  adresses$!: Observable<Address[]>;
  userId!: string;

  showAddAddressDialog = false;

  constructor(
    private addressService: AddressService,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadAddresses();
  }

  loadAddresses() {
    const currentUserId = this.authService.getCurrentUser();
    if (currentUserId) {
      this.userId = currentUserId.id;
      this.adresses$ = this.addressService.getByUserId(this.userId);
    }
  }

  openAddAddressDialog() {
    this.showAddAddressDialog = true;
  }

  editAddress(address: Address) {
    console.log('Endereço editado:', address);
  }

  confirmDelete(id: string) {
    if (confirm('Tem certeza que deseja excluir este endereço?')) {
      this.addressService.deleteAddress(id).subscribe(
        () => {
          this.onSuccess('Endereço excluído com sucesso!');
          location.reload();
        },
        (error) => this.onError('Erro ao excluir endereço.')
      );
    }
  }
  onSuccess(message: string) {
    this.notificationService.success(message);
  }

  onError(message: string) {
    this.notificationService.error(message);
  }
}
