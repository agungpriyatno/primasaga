import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost, IUser } from 'src/app/shared/models/response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)
  private base = environment.api

  signIn(body: FormData): Observable<string> {
    return this.http.put<string>(this.base + "/auth", body)
  }

  signUp(body: FormData): Observable<any> {
    return this.http.post<any>(this.base + "/auth", body)
  }

  session(): Observable<IUser> {
    return this.http.get<IUser>(this.base + "/auth")
  }

  set token(data: string) {
    localStorage.setItem("token", data)
  }

  get token(): string | null {
    return localStorage.getItem("token")
  }
}
