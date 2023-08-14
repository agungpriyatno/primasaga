import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { toast } from '../../animations/toast';
import { ToastService } from '../../services/toast.service';
import { IToast } from '../../models/utility';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [toast]
})
export class ToastComponent implements OnInit {


  constructor(private service: ToastService){}

  list: IToast[] = []

  ngOnInit(): void {
    this.service.observer.subscribe(res => {
      console.log("push");
      this.list.push(res),
      setTimeout(() => this.close(res.id!), 3000)
    })
  }

  close(id: string): void {
    const indexToast = this.list.findIndex((res) => res.id === id)
    if (indexToast !== -1) {
      this.list.splice(indexToast, 1)
    }
  }

}
