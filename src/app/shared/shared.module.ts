import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ContainerComponent } from './container/container.component';
import { PropertyService } from './services/property.service';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    FormsModule,
    PaginatorModule
  ],
  providers: [
    PropertyService
  ],
  exports: [
    FormsModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    PaginatorModule
  ]
})
export class SharedModule { }
