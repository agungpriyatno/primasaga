import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { postsDummy, postsProfileDummy } from '../../dummy/post';
import { IPost, IUser } from '../../models/response';
import { PostCardComponent } from './post-card/post-card.component';

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [
    CommonModule,
    PostCardComponent,
  ],
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
  @Input() user?: IUser

  list: IPost[] = []
  status: "initial" | "loading" = "initial"
  ngOnInit(): void {
    this.getList()
  }

  getList(): void {
    this.status = "loading"
    setTimeout(() => {
      if (this.user != undefined) {
        this.list.push(...postsProfileDummy(5))
      } else {
        this.list.push(...postsDummy(5))
      }
      this.status = "initial"
    }, 500)
  }

}
