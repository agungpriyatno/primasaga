import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { commentsDummy } from 'src/app/shared/dummy/post-comment';
import { USER } from 'src/app/shared/dummy/user';
import { IPost, IPostComment } from 'src/app/shared/models/response';
import { PostCommentItemComponent } from '../post-comment-item/post-comment-item.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { CommentService } from 'src/app/core/service/comment.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-post-comment',
  standalone: true,
  imports: [
    CommonModule,
    PostCommentItemComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  @Input({required: true}) data?: IPost
  @Output() addComment = new EventEmitter()

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private service: CommentService
  ){}

  user = USER
  list: IPostComment[] = []
  status: "loading" | "initial" | "error" = "initial"
  take = 5
  skip = 0

  form = this.fb.group({
    content: [""]
  })

  get content() {
    return this.form.get("content")
  }

  ngOnInit(): void {
    this.getList()
  }

  submit(){
    console.log();
    let formData: FormData = new FormData()
    formData.set("content", this.content?.value ?? "")

    this.service.create(this.data?.id ?? 0, formData).subscribe({
      next: (res) => {
        console.log(res);
        
        this.list.push(res)
        this.addComment.emit()
        this.form.reset()
      }
    })
    
  }

  getList() {
    this.status = "loading"
    let params = new HttpParams()
    .set("take", this.take)
    .append("skip", this.skip)
    this.service.query(this.data?.id ?? 0, params).subscribe({
      next: (res) => {
        this.list.push(...res)
        this.status = "initial"
      }, 
      error: (err) => {
        this.status = "initial"
      }
    })
  }
}
