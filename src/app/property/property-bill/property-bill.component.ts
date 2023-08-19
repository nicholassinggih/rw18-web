import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/entities/account.model';
import { AccountService } from 'src/app/shared/services/account.service';

export enum PaidFilter {
  ALL,
  PAID,
  UNPAID
}

@Component({
  selector: 'app-property-bill',
  templateUrl: './property-bill.component.html',
  styleUrls: ['./property-bill.component.scss']
})
export class PropertyBillComponent implements OnInit {
  propertyId: string | null = null;
  pemilikId: string | null = null;
  billList: Array<any> = [];
  paidFilterOptions: any[] = [
    { name: 'All', value: PaidFilter.ALL },
    { name: 'Paid', value: PaidFilter.PAID },
    { name: 'Unpaid', value: PaidFilter.UNPAID }
  ];
  paidFilter: any = this.paidFilterOptions[0].value;

  account: Account = null;

  constructor(
    private accountService: AccountService,
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
    this.accountService.getBills(this.account.id, this.paidFilter).subscribe(res => {
      this.billList = res.rows;
    })
  }

  goBack(): void {
    this.router.navigate(['property']);
  }
}
