import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beneficiary } from '../models/beneficiary.model';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BeneficiaryService {
  // chemin relatif : proxy.conf.json redirigera vers la gateway
  private base = `/beneficiary-service/api/beneficiaries`;

  constructor(private http: HttpClient) {}

  list(): Observable<Beneficiary[]> { return this.http.get<Beneficiary[]>(this.base); }
  get(id: number) { return this.http.get<Beneficiary>(`${this.base}/${id}`); }
  create(b: Beneficiary) { return this.http.post<Beneficiary>(this.base, b); }
  getByRib(rib: string) { return this.http.get<Beneficiary>(`${this.base}/byRib?rib=${encodeURIComponent(rib)}`); }
}
