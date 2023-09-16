import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';

import { PrimengModule } from '../primeng.module';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RecoverSuccessComponent } from './recover-success/recover-success.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    RecoverSuccessComponent,
    NewPasswordComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    SharedModule
  ]
})
export class AuthModule {}
