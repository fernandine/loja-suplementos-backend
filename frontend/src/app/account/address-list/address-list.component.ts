import { Component } from '@angular/core';
import { Address } from 'src/app/common/address';
import { User } from 'src/app/common/user';
import { AddressService } from 'src/app/services/address.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent {

  addresses: Address[] = [];
  showAddAddressDialog = false;

  constructor(
    private addressService: AddressService,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadAddresses();
  }

  loadAddresses() {
    this.userService.getAuthenticatedUser().subscribe(
      (user: User) => {
        this.addresses = user.addressList;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openAddAddressDialog() {
    this.showAddAddressDialog = true;
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
