import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/entities/payment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient
  ) { }

  savePayment(payment: Payment): Observable<any> {
    let url = `${environment.apiUrl}/payment/add`;
    return this.http.post<any>(url, payment);
  }


}
