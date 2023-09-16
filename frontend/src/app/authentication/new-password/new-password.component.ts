import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecoverService } from 'src/app/services/recover.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
  passForm!: FormGroup;
  @Input() error: string = "";
  token: string = '';
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private recoverService: RecoverService
  ) {}

  ngOnInit(): void {
    this.passForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmation: ['', [Validators.required]],
    });

    //Obter o token da rota
    this.route.params.subscribe(params => {
      this.token = params['token'];
    });
  }

  saveNewPassword(): void {
    const password = this.passForm.get('password')?.value;
    const confirmation = this.passForm.get('confirmation')?.value;

    if (password === confirmation) {
      this.recoverService.saveNewPassword(this.token, password)
        .subscribe(
          () => {
            this.error = 'Redefinição de senha feita com sucesso.';
          },
          error => {
            this.error = 'Redefinição de senha feita com sucesso.';
          }
        );
    } else {
      this.error = 'As senhas não coincidem.';
    }
  }
}
