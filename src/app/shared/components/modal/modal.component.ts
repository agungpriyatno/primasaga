import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';
import { ModalService } from '../../services/modal.service';
import { modal } from '../../animations/modal';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [ modal ],
})
export class ModalComponent {
  constructor(public service: ModalService) { }

  show: boolean = false

  close(value: boolean) {
    this.service.close(value)
  }

}
