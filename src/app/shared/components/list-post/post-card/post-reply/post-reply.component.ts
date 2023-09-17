import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { commentsDummy } from 'src/app/shared/dummy/post-comment';
import { USER } from 'src/app/shared/dummy/user';
import { IPostComment } from 'src/app/shared/models/response';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-post-reply',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.css']
})
export class PostReplyComponent {
  @Input({required: true}) data?: IPostComment;
  @Output() onReply = new EventEmitter()

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
  ){}

  user = USER
  list: IPostComment[] = []
  status: "loading" | "initial" | "error" = "error"

  ngOnInit(): void {
    this.getList()
  }

  form = this.fb.group({
    content: [""]
  })

  get content() {
    return this.form.get("content")
  }

  submit(){
    console.log();
    var comment = {
      id: 1,
      user: USER,
      content: (this.content?.value ?? ""),
      reply: 0
    }
    this.list.push(comment)
    this.onReply.emit()
    this.form.reset()
  }

  getList() {
    this.status = "loading"
    setTimeout(() => {
      this.list.push(...commentsDummy(this.data?.reply ?? 0, +(this.data?.id ?? 0) + 30))
      this.status = "initial"
    }, 500)
  }
}
