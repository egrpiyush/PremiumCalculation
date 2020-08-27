import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Occupation } from '../models/occupation'
import { MonthlyPremium } from '../models/monthly-premium'
import { getOccupationsUrl } from '../config/apiUrl';
import { getMonthlyPremiumUrl } from '../config/apiUrl';

@Injectable({
  providedIn: 'root',
})
export class CalculatePremiumService {
  
  constructor(private http: HttpClient) { }

  getOccupations(): Observable<Occupation[]>{
    return this.http.get<Occupation[]>(getOccupationsUrl);
  }

  getMonthlyPremium(coverAmount: number, occupationId: number, age: number): Observable<MonthlyPremium>{
    let params = new HttpParams().set("coverAmount", coverAmount.toString())
    .set("occupationId", occupationId.toString())
    .set("age", age.toString());
    return this.http.get<MonthlyPremium>(getMonthlyPremiumUrl, { params: params });
  }
}
