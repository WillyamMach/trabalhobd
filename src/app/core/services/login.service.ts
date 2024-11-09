import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private API_URL = 'http://localhost:8080/api.php';
  
  constructor(private http: HttpClient) { }

  verifyLogin(username: string, password: string): Observable<any> {
    let params = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.get<Login>(`${this.API_URL}`, {params: params});
  }
}
