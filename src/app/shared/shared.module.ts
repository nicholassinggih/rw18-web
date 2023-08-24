import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ContainerComponent } from './container/container.component';
import { AutocompleteFieldComponent } from './field/autocomplete-field/autocomplete-field.component';
import { BaseFieldComponent } from './field/base-field/base-field.component';
import { TextFieldComponent } from './field/text-field/text-field.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { AccountService } from './services/account.service';
import { PaymentService } from './services/payment.service';
import { PropertyService } from './services/property.service';


@NgModule({
  declarations: [
    ContainerComponent,
    TextFieldComponent,
    AutocompleteFieldComponent,
    BaseFieldComponent,
    PaymentListComponent
  ],
  imports: [
    CalendarModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    AutoCompleteModule,
    MessageModule,
    ToggleButtonModule,
    SelectButtonModule,
    TableModule,
    FormsModule,
    PaginatorModule,
    RouterModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [
    AccountService,
    PropertyService,
    PaymentService,
    MessageService
  ],
  exports: [
    CalendarModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    MessageModule,
    ToggleButtonModule,
    SelectButtonModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    PaymentListComponent,
    RouterModule,
    TextFieldComponent,
    AutocompleteFieldComponent,
    ToastModule,
    ReactiveFormsModule

  ]
})
export class SharedModule { }
