import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost, IPostComment } from 'src/app/shared/models/response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private http = inject(HttpClient)
  private base = environment.api


  create(postId: number, body: FormData): Observable<IPostComment> {
    return this.http.post<IPostComment>(this.base + "/post/" + postId + "/comment", body)
  }

  query(postId: number, params: HttpParams): Observable<IPostComment[]> {
    return this.http.get<IPostComment[]>(this.base + "/post/" + postId + "/comment", {params})
  }

}
