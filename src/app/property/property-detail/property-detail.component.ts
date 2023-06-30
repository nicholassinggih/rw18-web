import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collector } from 'src/app/entities/collector.model';
import { Pemilik } from 'src/app/entities/pemilik.model';
import { Property } from 'src/app/entities/property.model';
import { PropertyService } from 'src/app/shared/services/property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  propertyId: string | null = null;
  detail: Property = <Property>{ Pemilik: <Pemilik>{}, Collector: <Collector>{}};
  editMode: boolean = false;

  constructor(
    private propertyService: PropertyService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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

  goBack(): void {
    this.router.navigate(['property']);
  }

  enableEdit(): void {
    this.editMode = true;
  }

  save(): void {

  }
}
