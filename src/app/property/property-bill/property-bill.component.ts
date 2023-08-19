import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/entities/account.model';
import { AccountService } from 'src/app/shared/services/account.service';
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
  unpaidOnly: boolean = true;
  account: Account = null;

  constructor(
    private accountService: AccountService,
    private propertyService: PropertyService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.propertyId = this.activatedRoute.snapshot.paramMap.get('id');
    this.pemilikId = this.activatedRoute.snapshot.queryParamMap.get('pemilikId');
    this.getAccount();
  }

  getAccount(): void {
    this.accountService.getByPropertyAndOwnerId(this.propertyId, this.pemilikId).subscribe(res => {
      this.account = res[0];
      this.getBills();

    });
  }
  getBills(): void {
    this.accountService.getBills(this.account.id, this.unpaidOnly).subscribe(res => {
      this.billList = res.rows;
    })
  }

  goBack(): void {
    this.router.navigate(['property']);
  }
}
