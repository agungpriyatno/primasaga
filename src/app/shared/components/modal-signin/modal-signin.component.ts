import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modal } from '../../animations/modal';
import { ModalSigninService } from '../../services/modal-signin.service';

@Component({
  selector: 'app-modal-signin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-signin.component.html',
  styleUrls: ['./modal-signin.component.css'],
  animations: [modal]
})
export class ModalSigninComponent {
  constructor(public service: ModalSigninService) { }

  close(value: boolean) {
    this.service.close(value)
  }

}
