import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimengModule } from './primeng.module';
import { NotificationService } from './services/notification.service';
import { SharedModule } from './shared/shared.module';
import { SinglePageModule } from './single/single-page.module';
import { CheckoutModule } from './checkout/checkout.module';
import { AuthModule } from './authentication/auth.module';
import { ComponentsModule } from './components/components.module';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimengModule,
    SharedModule,
    SinglePageModule,
    CheckoutModule,
    AuthModule,
    ComponentsModule,
    AccountModule,
  ],
  providers: [NotificationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
