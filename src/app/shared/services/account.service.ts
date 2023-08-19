import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaidFilter } from 'src/app/property/property-bill/property-bill.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  getById(id: string | null): Observable<any> {
    let url = `${environment.apiUrl}/account/search`;
    return this.http.get<any>(url, {params: {
      accountOnly: 1,
      id: id || ''}});
  }

  getByPropertyAndOwnerId(propertyId: string | null, pemilikId: string | null): Observable<any> {
    let url = `${environment.apiUrl}/account/search`;
    return this.http.get<any>(url, {params: {
      propertyId: propertyId || '',
      pemilikId: pemilikId || '',
      accountOnly: 1
    }});
  }


  getBills(accountId: number, paidFilter: PaidFilter): Observable<any> {
    let billPaid = undefined;
    switch(paidFilter) {
      case PaidFilter.PAID: billPaid = 1; break;
      case PaidFilter.UNPAID: billPaid = 0; break;
    }

    let url = `${environment.apiUrl}/bill/search`;
    return this.http.get<any>(url, {params: {
      accountId: accountId || '',
      paid: billPaid
    }});
  }

}
