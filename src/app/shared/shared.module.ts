import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ContainerComponent } from './container/container.component';
import { PropertyService } from './services/property.service';
import { TextFieldComponent } from './field/text-field/text-field.component';

@NgModule({
  declarations: [
    ContainerComponent,
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    FormsModule,
    PaginatorModule,
    RouterModule
  ],
  providers: [
    PropertyService
  ],
  exports: [
    FormsModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    RouterModule
  ]
})
export class SharedModule { }
