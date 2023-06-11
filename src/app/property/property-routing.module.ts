import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from '../shared/container/container.component';
import { PropertyListComponent } from './property-list/property-list.component';

const routes: Routes = [
  {
    path:'',
    component: ContainerComponent,
    children: [
      { path:'', component: PropertyListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
