import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from 'src/app/shared/services/property.service';

@Component({
  selector: 'app-property-bill',
  templateUrl: './property-bill.component.html',
  styleUrls: ['./property-bill.component.scss']
})
export class PropertyBillComponent implements OnInit {
  propertyId: string | null = null;
  pemilikId: string | null = null;
  billList: Array<any> = [];

  constructor(
    private propertyService: PropertyService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.propertyId = this.activatedRoute.snapshot.paramMap.get('id');
    this.pemilikId = this.activatedRoute.snapshot.queryParamMap.get('pemilikId');

    this.getBills();
  }

  getBills(): void {
    this.propertyService.getBills(this.propertyId, this.pemilikId).subscribe(res => {
      this.billList = res;
    })
  }

  goBack(): void {
    this.router.navigate(['property']);
  }
}
