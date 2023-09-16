import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HowToByComponent } from './how-to-by/how-to-by.component';
import { JobApplicationComponent } from './job-application/job-application.component';
import { PrivacePolicyComponent } from './privace-policy/privace-policy.component';
import { ReplacementComponent } from './replacement/replacement.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PrimengModule } from '../primeng.module';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule
  ],
  declarations: [
    AboutComponent,
    ContactComponent,
    HowToByComponent,
    JobApplicationComponent,
    PrivacePolicyComponent,
    ReplacementComponent,
    ShippingComponent
  ],

})
export class SinglePageModule { }
