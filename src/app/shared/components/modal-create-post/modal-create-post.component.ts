import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modal } from '../../animations/modal';
import { ModalCreatePostService } from '../../services/modal-create-post.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-create-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-create-post.component.html',
  styleUrls: ['./modal-create-post.component.css'],
  animations: [modal]
})
export class ModalCreatePostComponent {
  constructor(
    public service: ModalCreatePostService,
  ) { }

  content = new FormControl('')

  close() {
    this.service.close()
  }

}
