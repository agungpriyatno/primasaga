import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IBase, IUser } from 'src/app/shared/models/response';
import { generateUrl } from 'src/app/shared/utilities/generate-url';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: HttpClient = inject(HttpClient)
  path: string = environment.api.auth


  signIn(data: FormData): Observable<IBase<string>>{
    return this.http.post<IBase<string>>(generateUrl(this.path + "/login"), data)
  }

  signUp(data: FormData): Observable<IBase<IUser>>{
    return this.http.post<IBase<IUser>>(generateUrl(this.path + "/register"), data)
  }

  get session(): Observable<IBase<IUser>> {
    return this.http.get<IBase<IUser>>(generateUrl("users/me"))
  }

  set token(data: string) {
    localStorage.setItem("token", data)
  }

  get token() : string | null {
    return localStorage.getItem("token")
  }
}
