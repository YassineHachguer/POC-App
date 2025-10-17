import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Virement } from '../models/virement.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VirementService {
  // chemin relatif : proxy.conf.json redirigera vers la gateway
  private base = `/virement-service/api/virements`;

  constructor(private http: HttpClient) {}

  list(): Observable<Virement[]> {
    return this.http.get<Virement[]>(this.base);
  }

  get(id: number): Observable<Virement> {
    return this.http.get<Virement>(`${this.base}/${id}`);
  }

  create(v: Virement): Observable<Virement> {
    return this.http.post<Virement>(this.base, v);
  }

  byBeneficiary(beneficiaryId: number): Observable<Virement[]> {
    return this.http.get<Virement[]>(`${this.base}/byBeneficiary/${beneficiaryId}`);
  }
}
