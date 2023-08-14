import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { USER } from '../../../dummy/user';
import { IPost } from '../../../models/response';
import { TimeAgoPipe } from '../../../pipes/time-ago.pipe';
import { fadeDropdown } from '../../../animations/fade-dropdown';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { ToastService } from 'src/app/shared/services/toast.service';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [
    CommonModule,
    TimeAgoPipe,
    PostCommentComponent,
  ],
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
  animations: [
    fadeDropdown,
  ]
})
export class PostCardComponent {
  @Input({required: true}) public post?: IPost

  constructor(
    private toast: ToastService,
    private postService: PostService
  ){}
  user = USER
  comment: boolean = false
  more: boolean = false
  translate: string = 'translateX(0%)'
  index: number = 0

  onDelete(id: string) {
    this.postService.delete(id).subscribe({
      next: (res) => {
        this.toast.push({
          content: "Berhasil menghapus postingan",
          type: "success"
        })
      },
      error: (err) => {
        console.log(err);
        this.toast.push({
          content: "Gagal menghapus postingan",
          type: "error"
        })
      }
    })
  }

  onLike() {
    if (!this.post!.liked) {
      this.post!.liked = true
      this.post!.like += 1
    } else {
      this.post!.liked = false
      this.post!.like -= 1
    }
  }

  onAddComment(){
    this.post!.comment += 1
  }

  commentToggler() {
    this.comment = !this.comment
  }

  moreToggle() {
    this.more = !this.more
  }

  contentSlicer(content: string) {
    if (content.length > 200) {
      return content.slice(0, 200) + "..."
    }
    return content
  }

  slideImage(data: boolean) {
    var length = (this.post?.images.length ?? 0)
    switch (data) {
      case true:
        if (this.index < length - 1) {
          this.index += 1
        } else {
          this.index = 0
        }
        break;
      case false:
        if (this.index == 0) {
          this.index = length - 1
        } else {
          this.index -= 1
        }
    }
    this.translate = 'translateX(-' + this.index + '00%)'
  }
}
