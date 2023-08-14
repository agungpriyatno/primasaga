import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPostComment } from 'src/app/shared/models/response';
import { PostReplyComponent } from '../post-reply/post-reply.component';
import { fadeDropdown } from 'src/app/shared/animations/fade-dropdown';

@Component({
  selector: 'app-post-comment-item',
  standalone: true,
  imports: [
    CommonModule,
    PostReplyComponent,
  ],
  templateUrl: './post-comment-item.component.html',
  styleUrls: ['./post-comment-item.component.css'],
  animations: [
    fadeDropdown
  ]
})
export class PostCommentItemComponent {
  @Input({required: true}) public data?: IPostComment
  reply: boolean = false

  onReply() {
    this.reply = !this.reply
  }

  onAddReply(){
    this.data!.reply += 1
  }
}
