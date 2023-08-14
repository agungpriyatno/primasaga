import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IBase, IPost } from 'src/app/shared/models/response';
import { generateUrl } from 'src/app/shared/utilities/generate-url';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  http: HttpClient = inject(HttpClient)
  path: string = environment.api.post

  create(data: FormData): Observable<IBase<IPost>> {
    return this.http.post<IBase<IPost>>(generateUrl(this.path), data)
  }

  update(data: FormData, id: string): Observable<IBase<IPost>> {
    return this.http.post<IBase<IPost>>(generateUrl(this.path + "/"), data)
  }

  find(id: string): Observable<IBase<IPost>> {
    return this.http.get<IBase<IPost>>(generateUrl(this.path + "/" + id + "/detil"))
  }

  delete(id: string): Observable<IBase<IPost>> {
    return this.http.delete<IBase<IPost>>(generateUrl(this.path + "/" + id + "/delete"))
  }


  findAll(params: HttpParams): Observable<IBase<IPost[]>> {
    return this.http.get<IBase<IPost[]>>(generateUrl(this.path), {params})
  }
}
