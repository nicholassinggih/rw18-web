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

  get pemilik(): string{
    return this.detail?.Pemilik?.nama;
  }

  set pemilik(value: string) {
    if (!this.detail?.Pemilik) return;
    this.detail.Pemilik.nama = value;
  }

  get blok(): string {
    return this.detail?.blok;
  }

  set blok(value: string) {
    if (!this.detail) return;
    this.detail.blok = value;
  }

  get no(): string {
    return this.detail?.no;
  }

  set no(value: string) {
    if (!this.detail) return;
    this.detail.no = value;
  }

  get rt(): string {
    return this.detail?.rt;
  }

  set rt(value: string) {
    if (!this.detail) return;
    this.detail.rt = value;
  }

  get collector(): string {
    return this.detail?.Collector?.nama;
  }

  set collector(value: string) {
    if (!this.detail?.Collector) return;
    this.detail.Collector.nama = value;
  }

  get commercial(): string {
    return this.detail?.komersial;
  }

  set commercial(value: string) {
    if (!this.detail?.komersial) return;
    this.detail.komersial.nama = value;
  }



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
