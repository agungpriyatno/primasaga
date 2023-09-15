import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modal } from '../../animations/modal';
import { ModalCreatePostService } from '../../services/modal-create-post.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/core/service/post.service';
import { ToastService } from '../../services/toast.service';

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
    private post: PostService,
    private toast: ToastService,
    private fb: FormBuilder,
  ) { }

  isLoading = false
  content = new FormControl('', [Validators.required])

  submit() {
    if (this.content.invalid) return this.toast.push({
      content: "Konten harus di isi",
      type: "error"
    })
    this.isLoading = true
    let formData = new FormData()
    formData.set("content", this.content.value ?? "")
    this.post.create(formData).subscribe({
      next: (res) => {
        this.isLoading = false
        this.close()
      },
      error: (err) => {
        this.isLoading = false
        console.log(err);
      }
    })
  }

  close() {
    this.service.close()
  }

}
