import { Component, Input, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
  @Input() accountId: string;
  keyword: string = '';
  paymentList: Array<any>;
  totalRecords: number;
  pageSize: number = 10;
  offset: number = 0;

  constructor(
    private paymentService: PaymentService,
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.search(this.accountId, this.keyword, this.offset, this.pageSize);
  }

  search(accountId: string, keyword: string, offset: number, limit: number): void{
    this.offset = offset;
    this.pageSize = limit;
    this.paymentService.getPaymentList(accountId, keyword, offset, limit).subscribe({
      next: res => {
        this.paymentList = res.rows;
        this.totalRecords = res.count;
      },
      error: console.log
    });
  }

  pageEvent(event: any) {
    console.log(event);
    this.search(this.accountId, this.keyword, event.first, event.rows);
  }
}
