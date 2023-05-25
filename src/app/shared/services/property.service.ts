import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private http: HttpClient
  ) { }

  searchProperty(keyword: string) {
    let url = `${environment.apiUrl}/property/search`;
    // return this.http.post<any>(url, params);
  }

}
