import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { NotificationService } from '../services/notification.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    PasswordModule,
    DividerModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  declarations: [
  LoginComponent,
  RegisterComponent
],
providers: [
  NotificationService,
  MessageService,


]
})
export class AuthModule { }
