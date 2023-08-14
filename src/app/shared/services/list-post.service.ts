import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPost } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ListPostService {

  constructor() { }

  private subject: Subject<IPost> = new Subject<IPost>()
  public listen = this.subject.asObservable()

  public push(data: IPost) {
    this.subject.next(data)
  }

}
