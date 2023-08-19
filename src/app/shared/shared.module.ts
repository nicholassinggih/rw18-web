import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
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
    AutoCompleteModule,
    TableModule,
    FormsModule,
    PaginatorModule,
    RouterModule
  ],
  providers: [
    AccountService,
    PropertyService
  ],
  exports: [
    FormsModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    RouterModule,
    TextFieldComponent,
    AutocompleteFieldComponent,
  ]
})
export class SharedModule { }
