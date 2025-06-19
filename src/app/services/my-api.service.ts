import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7183/api/controller/create'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  login(model: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, model);
  }
}
