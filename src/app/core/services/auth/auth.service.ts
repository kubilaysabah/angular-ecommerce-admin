import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {LoginBody, RegisterBody, User} from './auth.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = 'auth';

  constructor(private http: HttpClient) {
  }

  getAuthToken(): string | null {
    return window.localStorage.getItem('token')
  }

  login(body: LoginBody): Observable<User> {
    return this.http.post(`${this.baseURL}/login`, body);
  }

  register(body: RegisterBody): Observable<User> {
    return this.http.post(`${this.baseURL}/register`, body);
  }
}
