import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyRoutingModule } from './property-routing.module';
import { PropertyBillComponent } from './property-bill/property-bill.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';



@NgModule({
  declarations: [
    PropertyDetailComponent,
    PropertyListComponent,
    PropertyBillComponent,
    AddPaymentComponent
  ],
  imports: [
    PropertyRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    PropertyDetailComponent
  ]
})
export class PropertyModule { }
