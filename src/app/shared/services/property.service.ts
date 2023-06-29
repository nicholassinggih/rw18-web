import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private http: HttpClient
  ) { }

  searchProperty(keyword: string, offset: number, pageSize: number) {
    let url = `${environment.apiUrl}/property/search`;
    return this.http.get<any>(url, {params: {keyword: keyword, offset: offset, limit: pageSize}});
  }

  getById(id: string | null): Observable<any> {
    let url = `${environment.apiUrl}/property/search`;
    return this.http.get<any>(url, {params: {id: id || ''}});
  }

}
