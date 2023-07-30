import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/common/address';
import { AddressService } from 'src/app/services/address.service';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {

  address!: Address;

  addressForm = this.formBuilder.group({
    id: [''],
    cep: ['', Validators.required],
    logradouro: ['', Validators.required],
    complemento: [''],
    bairro: ['', Validators.required],
    localidade: ['', Validators.required],
    uf: ['', Validators.required],
    userId: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private addressService: AddressService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
    ) {
  }

  ngOnInit(): void {
    const addressId = this.route.snapshot.params['id'];
    if (addressId) {
      this.loadAddress(addressId);
    }
  }

  loadAddress(addressId: string) {
    this.addressService.getByUserId(addressId)
      .subscribe(
        (addresses: Address[]) => {
          const address = addresses[0];
          this.addressForm.setValue({
            id: address?.id ?? '',
            cep: address.cep,
            logradouro: address.logradouro,
            complemento: address?.complemento ?? '',
            bairro: address.bairro,
            localidade: address.localidade,
            uf: address.uf,
            userId: address.userId
          });
        },
        error => {
          console.error('Erro ao buscar endereço pelo ID:', error);
        }
      );
  }

  onCepBlur() {
    const cep = this.addressForm.get('cep')?.value;
    if (cep && this.addressForm) {
      this.addressService.getAddressByCEP(cep)
        .subscribe(
          (address: Address) => {
            this.addressForm.patchValue({
              logradouro: address.logradouro,
              complemento: address.complemento,
              bairro: address.bairro,
              localidade: address.localidade,
              uf: address.uf
            });
          },
          error => {
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
      this.address.userId = currentUser.id;
      this.addressService.createAddress(this.address)
        .subscribe(
          _result => {
            console.log("Endereço recebido:", this.address);
            this.onSuccess('Endereço criado com sucesso!');
            this.addressForm.reset();
            location.reload();
          },
          _error => this.onError('Erro ao criar endereço.')
        );
    }
  }

  updateAddress() {
    this.addressService.updateAddress(this.address.id, this.address)
      .subscribe(
        _result => {
          this.onSuccess('Endereço atualizado com sucesso!');
        },
        _error => this.onError('Erro ao atualizar endereço.')
      );
  }

  onSuccess(message: string) {
    this.notificationService.success(message);
  }

  onError(message: string) {
    this.notificationService.error(message);
  }
}
