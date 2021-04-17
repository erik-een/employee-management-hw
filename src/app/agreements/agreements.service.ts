import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Agreement } from "../shared/agreement";
import { AGREEMENTS } from "../shared/mock-agreement";


@Injectable({
  providedIn: 'root'
})
export class AgreementsService {
  mockId: number = 6;
  getAgreements(): Observable<Agreement[]> {
    return of(AGREEMENTS)
  }

  deleteAgreement(agreementId: number): Observable<Agreement[]> {
    const agreementIndex = AGREEMENTS.findIndex(agreement => agreement.id === agreementId);
    return of(AGREEMENTS.splice(agreementIndex, 1))
  }

  addAgreement(agreement: Agreement): Observable<number> {
    return of(AGREEMENTS.push({
      id: this.mockId++,
      type: agreement.type,
      duration: agreement.duration
    }))
  }

  constructor() { }
}
