import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modal } from '../../animations/modal';
import { ModalCreatePostService } from '../../services/modal-create-post.service';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from 'src/app/core/service/post.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-create-post',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
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
    private router: Router,
  ) { }

  isLoading = false

  files: any[] = []
  public fileUrls: string[] = []

  form = this.fb.group({
    content: ["", [Validators.required]]
  })

  get content() {
    return this.form.get("content")
  }

  submit() {
    if (this.content?.invalid) return this.toast.push({
      content: "Konten harus di isi",
      type: "error"
    })
    this.isLoading = true
    let formData = new FormData()
    formData.set("content", this.content?.value ?? "")
    this.files.forEach(file => {
      formData.append("media", file)
    })
    this.post.create(formData).subscribe({
      next: (res) => {
        this.isLoading = false
        this.close()
        window.location.reload()
      },
      error: (err) => {
        this.isLoading = false
        console.log(err);
      }
    })
  }

  deleteImage(index: number) {
    this.fileUrls.splice(index, 1)
    this.files.splice(index, 1)
  }

  onFilePick(event: any) {
    const raw: FileList = event.target.files

    for (let i = 0; i < raw.length; i++) {
      const file = raw[i];
      let objectURL = URL.createObjectURL(file);
      this.fileUrls.push(objectURL)

      console.log(objectURL);
      this.files.push(file)
    }
  }

  close() {
    this.service.close()
  }

}
