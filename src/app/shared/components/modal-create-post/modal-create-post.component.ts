import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modal } from '../../animations/modal';
import { ModalCreatePostService } from '../../services/modal-create-post.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { PostService } from 'src/app/core/services/post.service';
import { ToastService } from '../../services/toast.service';
import { ListPostService } from '../../services/list-post.service';

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
    public post: PostService,
    public listPost: ListPostService,
    public toast: ToastService,
  ) { }

  content = new FormControl('')
  isLoading: boolean = false

  submit() {
    this.isLoading = true
    this.post.create(this.formData).subscribe({
      next: (res) => {
        this.listPost.push(res.data)
        this.toast.push({
          content: "Berhasil menambahkan postingan",
          type: "success"
        })
      },
      error: (err) => {
        console.log(err);
        this.toast.push({
          content: "Gagal menambahkan postingan",
          type: "error"
        })
      }
    })
  }


  close() {
    this.service.close()
  }

  get formData() {
    const data: FormData = new FormData()
    data.set("content", this.content.value ?? "")
    return data
  }

}
