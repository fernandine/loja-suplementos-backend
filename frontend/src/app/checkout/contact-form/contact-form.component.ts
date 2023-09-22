import { Component } from '@angular/core';
import {
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  orderForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    cpf: [
      '',
      [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
    ],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    cep: ['', Validators.required],
    logradouro: ['', Validators.required],
    complemento: [''],
    bairro: ['', Validators.required],
    localidade: ['', Validators.required],
    uf: ['', Validators.required],

  });

  constructor(
    private fb: NonNullableFormBuilder,
    private service: UserService
  ) {}

  ngOnInit() {
    this.service.getAuthenticatedUser().subscribe((user) => {
      if (user) {
        this.orderForm.patchValue({
          firstname: user.firstname,
          lastname: user.lastname,
          cpf: user.cpf,
          phone: user.phone,
          email: user.email,
        });

        if (user.addressList && user.addressList.length > 0) {
          const firstAddress = user.addressList[0];
          this.orderForm.patchValue({
            cep: firstAddress.cep,
            logradouro: firstAddress.logradouro,
            complemento: firstAddress.complemento,
            bairro: firstAddress.bairro,
            localidade: firstAddress.localidade,
            uf: firstAddress.uf,
          });
        }
      }
    });
  }
}
