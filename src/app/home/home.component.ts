import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../shared/services/property.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchKeyword: string = '';
  propertyList: Array<any> = [];

  constructor(private propSvc: PropertyService) { }

  ngOnInit(): void {
  }

  search(keyword: string): void{
    this.propSvc.searchProperty(keyword).subscribe(res => {
      console.log(res);
      this.propertyList = res;
    });
  }
}
