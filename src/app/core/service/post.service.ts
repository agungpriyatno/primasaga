import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/shared/models/response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private http = inject(HttpClient)
  private base = environment.api


  create(body: FormData): Observable<any> {
    return this.http.post<any>(this.base + "/post", body)
  }

  query(params: HttpParams): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.base + "/post", {params})
  }

  like(id: number): Observable<any> {
    return this.http.put<any>(this.base + "/post/" + id + "/like", {})
  }
  

}
