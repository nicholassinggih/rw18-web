import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/entities/account.model';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent {
  propertyId: number;
  pemilikId: number;
  accountId: string;
  account: Account = null;
  form: FormGroup;

  constructor(
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  createForm(): void {
    this.form = this.fb.group({
      accountId: [{ value: this.accountId, disabled: true}],
      amount: 0,
      fromName: '',
      fromBank: '',
      fromAccountNo: '',
      notes: '',
    });
  }

  submitForm(): void {

  }
  ngOnInit(): void {
    this.accountId = this.activatedRoute.snapshot.paramMap.get('accountId');
    this.getAccount();
    this.createForm();
  }

  getAccount(): void {
    this.accountService.getById(this.accountId).subscribe(res => {
      this.account = res[0];
      this.propertyId = this.account.propertyId;
      this.pemilikId = this.account.pemilikId;

    });
  }

  goBack(): void {
    this.router.navigate(['property', 'bills', this.propertyId, this.pemilikId]);
  }

  addPayment(): void {
    this.router.navigate(['property', 'pay']);
  }

}
