import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { commentsDummy } from 'src/app/shared/dummy/post-comment';
import { USER } from 'src/app/shared/dummy/user';
import { IPost, IPostComment } from 'src/app/shared/models/response';
import { PostCommentItemComponent } from '../post-comment-item/post-comment-item.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';

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
  ){}

  user = USER
  list: IPostComment[] = []
  status: "loading" | "initial" | "error" = "initial"

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
    var comment = {
      id: "1",
      user: USER,
      content: (this.content?.value ?? ""),
      reply: 0
    }
    this.list.push(comment)
    this.addComment.emit()
    this.form.reset()
  }

  getList() {
    this.status = "loading"
    setTimeout(() => {
      this.list.push(...commentsDummy((this.data?.comment ?? 0) , +(this.data?.id ?? 0)))
      this.status = "initial"
    }, 500)
  }
}
