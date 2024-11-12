import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private API_URL = 'http://localhost:8080/login/register.php';
  
  constructor(private http: HttpClient) { }

  registerUser(username: string, email: string, password: string): Observable<any> {
    const data = { username, email, password }

    return this.http.post<Register>(this.API_URL, data);
  }
}
