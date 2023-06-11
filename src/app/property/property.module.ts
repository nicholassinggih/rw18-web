import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyRoutingModule } from './property-routing.module';



@NgModule({
  declarations: [
    PropertyDetailComponent,
    PropertyListComponent
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
