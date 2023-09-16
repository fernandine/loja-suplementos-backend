import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Email } from 'src/app/common/email';
import { RecoverService } from 'src/app/services/recover.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {
  emailForm!: FormGroup;

  @Input() error: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private recoverService: RecoverService,
      ) {}

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  recoverPassword(email: string): void {
    const requestData: Email = { email };
    this.recoverService.createRecoverToken(requestData)
      .subscribe(
        () => {
          this.error = 'Recuperação de senha com sucesso. Verifique seu email';
          setTimeout(() => {
            this.router.navigate(['/recover-success'], { queryParams: { email: email } });
          }, 1000);
        },
        error => {
          this.error = 'Ocorreu um erro ao solicitar a recuperação de senha.';
        }
      );
  }

  onRecover() {
    this.router.navigate(['/auth-login']);
  }
}
