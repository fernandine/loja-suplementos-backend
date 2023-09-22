import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/common/address';
import { User } from 'src/app/common/user';
import { AddressService } from 'src/app/services/address.service';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent {
  address!: Address;
  addresses: Address[] = [];

  addressForm = this.formBuilder.group({
    id: '',
    cep: ['', Validators.required],
    logradouro: ['', Validators.required],
    complemento: [''],
    bairro: ['', Validators.required],
    localidade: ['', Validators.required],
    uf: ['', Validators.required],
    userId: ''
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private addressService: AddressService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    this.userService.getAuthenticatedUser().subscribe((user) => {
      this.address = user.addressList[0];
      this.addressForm.patchValue({
        id: this.address.id,
        cep: this.address.cep,
        logradouro: this.address.logradouro,
        complemento: this.address.complemento,
        bairro: this.address.bairro,
        localidade: this.address.localidade,
        uf: this.address.uf,
        userId: this.address.userId
      });
    });
  }

  onCepBlur() {
    const cep = this.addressForm.get('cep')?.value;
    if (cep && this.addressForm) {
      this.addressService.getAddressByCEP(cep).subscribe(
        (address: Address) => {
          this.addressForm.patchValue({
            logradouro: address.logradouro,
            complemento: address.complemento,
            bairro: address.bairro,
            localidade: address.localidade,
            uf: address.uf,
          });
        },
        (error) => {
          console.error('Erro ao buscar endereço pelo CEP:', error);
        }
      );
    }
  }

  onSubmit() {
    if (this.addressForm.valid) {
      if (this.isNewAddress()) {
        this.createAddress();
      } else {
        this.updateAddress();
      }
    }
  }

  isNewAddress(): boolean {
    return this.addressForm.get('id')?.value === '';
  }

  createAddress() {
    this.address = <Address>this.addressForm.value;
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.addressService.createAddress(this.address).subscribe(
        (_result) => {
          this.loadCurrentUser();
          this.onSuccess('Endereço criado com sucesso!');

        },
        (_error) => this.onError('Erro ao criar endereço.')
      );
    }
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

  updateAddress() {
    this.address = { ...this.address, ...this.addressForm.value };

    this.addressService.updateAddress(this.address.id, this.address).subscribe(
      (_result) => {
        this.onSuccess('Endereço atualizado com sucesso!');
        this.loadAddresses();
        location.reload();
      },
      (_error) => this.onError('Erro ao atualizar endereço.')
    );
  }

  onSuccess(message: string) {
    this.notificationService.success(message);
  }

  onError(message: string) {
    this.notificationService.error(message);
  }
}
