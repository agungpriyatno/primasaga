import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalSigninService {

  constructor() { }

  public status: boolean = false
  private subject?: Subject<boolean>

  open() {
    this.status = true
    this.subject = new Subject()
    return this.subject.asObservable()
  }

  close(value: boolean) {
    this.status = false
    this.subject?.next(value)
    this.subject?.complete()
  }
}
