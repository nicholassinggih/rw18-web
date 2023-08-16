import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from '../shared/container/container.component';
import { PropertyBillComponent } from './property-bill/property-bill.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListComponent } from './property-list/property-list.component';

const routes: Routes = [
  {
    path:'',
    component: ContainerComponent,
    children: [
      { path:'', component: PropertyListComponent},
      { path:':id', component: PropertyDetailComponent},
      { path:'bills/:id', component: PropertyBillComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
