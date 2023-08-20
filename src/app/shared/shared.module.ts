import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ContainerComponent } from './container/container.component';
import { AutocompleteFieldComponent } from './field/autocomplete-field/autocomplete-field.component';
import { BaseFieldComponent } from './field/base-field/base-field.component';
import { TextFieldComponent } from './field/text-field/text-field.component';
import { AccountService } from './services/account.service';
import { PropertyService } from './services/property.service';

@NgModule({
  declarations: [
    ContainerComponent,
    TextFieldComponent,
    AutocompleteFieldComponent,
    BaseFieldComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    AutoCompleteModule,
    ToggleButtonModule,
    SelectButtonModule,
    TableModule,
    FormsModule,
    PaginatorModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    AccountService,
    PropertyService
  ],
  exports: [
    FormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    ToggleButtonModule,
    SelectButtonModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    RouterModule,
    TextFieldComponent,
    AutocompleteFieldComponent,
    ReactiveFormsModule

  ]
})
export class SharedModule { }
