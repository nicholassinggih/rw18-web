import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-route',
  templateUrl: './empty-route.component.html',
  styleUrls: ['./empty-route.component.scss']
})
export class EmptyRouteComponent  {
  constructor(private router: Router) {
    this.to404();
   }

   to404():void{
     this.router.navigate(['/404']);
   }
}
