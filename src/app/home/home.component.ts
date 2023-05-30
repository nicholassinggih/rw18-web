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
  totalRecords: number = 0;
  pageSize: number = 10;
  offset: number = 0;

  constructor(private propSvc: PropertyService) { }

  ngOnInit(): void {
  }

  search(keyword: string, offset: number, limit: number, event: any = null): void{
    console.log(event);
    this.offset = offset;
    this.pageSize = limit;
    this.propSvc.searchProperty(keyword, this.offset, this.pageSize).subscribe(res => {
      console.log(res);
      this.propertyList = res.rows;
      this.totalRecords = res.count;
    });
  }

  pageEvent(event: any) {
    console.log(event);
    this.search(this.searchKeyword, event.first, event.rows);
  }
}
