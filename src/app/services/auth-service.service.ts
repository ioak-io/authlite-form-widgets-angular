import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  BASE_URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient) {}

  getGooleAuth(code: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/auth?code=${code}`);
  }
}
