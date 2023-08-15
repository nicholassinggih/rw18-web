import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/shared/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {

  searchKeyword: string = '';
  propertyList: Array<any> = [];
  totalRecords: number = 0;
  pageSize: number = 10;
  offset: number = 0;
  constructor(private propSvc: PropertyService,
    private router: Router) { }

  ngOnInit(): void {
    this.search(this.searchKeyword, this.offset, this.pageSize);
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

  editProperty(id: number) {

  }

  seeBills(id: number) {
    this.router.navigate([`/property/bills`, id]);
  }

  viewDetail(id: number) {
    this.router.navigate([`/property`, id]);
  }

}
