import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalCreatePostService {

  constructor() { }

  public status: boolean = false
  private subject?: Subject<boolean>

  open() {
    this.status = true
  }

  close() {
    this.status = false
  }

}
