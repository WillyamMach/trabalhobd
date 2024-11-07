import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private API_URL = 'localhost:8080/login';
  
  // constructor(private http: HttpClient) { }

  // verifyLogin(username: string, password: string) {
  //   const data = {username, password};
    
  //   return this.http.post<Login>(this.API_URL, data);
  // }
}
