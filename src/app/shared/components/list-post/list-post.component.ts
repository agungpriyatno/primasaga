import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { postsDummy, postsProfileDummy } from '../../dummy/post';
import { IPost, IUser } from '../../models/response';
import { PostCardComponent } from './post-card/post-card.component';
import { HttpParams } from '@angular/common/http';
import { PostService } from 'src/app/core/services/post.service';
import { ListPostService } from '../../services/list-post.service';

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

  constructor(
    private post: PostService,
    private service: ListPostService
  ){}

  list: IPost[] = []
  offset: number = -5
  limit: number = 5

  status: "initial" | "loading" = "initial"

  ngOnInit(): void {
    this.service.listen.subscribe((res) => this.list.unshift(res))
    this.getList()
  }

  getList(): void {
    this.status = "loading"
    this.offset += 5
    this.post.findAll(this.params).subscribe({
      next: (res) => {
        this.list.push(...res.data)
      }
    })

  }

  get params() {
    const data : HttpParams = new HttpParams()
    .set("offset", this.offset)
    .append("limit", this.limit)
    return data
  }

}
