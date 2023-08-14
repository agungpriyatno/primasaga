import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { IToast } from '../models/toast';
import { v4 as uuid } from 'uuid';
import { IToast } from '../models/utility';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  private subject = new Subject<IToast>()
  public observer = this.subject.asObservable()

  push(data: IToast) {
    data.id = uuid()
    this.subject.next(data)
  }
}
