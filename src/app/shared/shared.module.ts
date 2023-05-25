import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PropertyService } from './services/property.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  providers: [
    PropertyService
  ],
  exports: [
    FormsModule
  ]
})
export class SharedModule { }
