import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Occupation } from '../models/occupation'
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

  getMonthlyPremium(): Observable<any[]>{
    return this.http.get<any[]>(getMonthlyPremiumUrl);
  }
}
