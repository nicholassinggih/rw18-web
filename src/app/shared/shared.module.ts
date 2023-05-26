import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PropertyService } from './services/property.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    FormsModule
  ],
  providers: [
    PropertyService
  ],
  exports: [
    FormsModule,
    InputTextModule,
    TableModule,
    ButtonModule
  ]
})
export class SharedModule { }
