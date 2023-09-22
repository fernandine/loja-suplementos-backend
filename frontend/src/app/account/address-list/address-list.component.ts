import { Address } from './../../common/address';
import { Component } from '@angular/core';
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
  user!: User
  address!: Address;
  addresses: Address[] = [];
  showAddAddressDialog = false;

  constructor(
    private service: UserService,
    private addressService: AddressService,
    private notification: NotificationService
  ) { }

  ngOnInit() {
    this.service.getAuthenticatedUser().subscribe((user: User) => {
      this.user = user;
      this.addresses = user.addressList;
    });
  }

  openDialog() {
    this.showAddAddressDialog = true;
  }

  delete(id: string) {
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
    this.notification.success(message);
  }

  onError(message: string) {
    this.notification.error(message);
  }
}
