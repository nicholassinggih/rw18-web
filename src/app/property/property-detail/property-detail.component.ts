import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/shared/services/property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  propertyId: string | null = null;
  detail: any;

  constructor(
    private propertyService: PropertyService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.propertyId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getDetail();
  }

  getDetail(): void {
    this.propertyService.getById(this.propertyId).subscribe(res => {
      console.log(res);
      this.detail = res;

    })

  }
}
